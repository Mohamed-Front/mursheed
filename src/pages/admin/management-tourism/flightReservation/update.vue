<template>

  <va-card class="card">

    <div class=" flex justify-center">
      <form @submit.prevent="onSubmit" class="flex flex-col  w-3/4 py-9">
        <h2 class="pb-4 text-center va-text-bold">
          Update Flight
          <Dropdown v-model="langSelected" editable :options="lang" optionLabel="name" option-value="value"
                    class="w-36 mx-3 mx-10"/>

        </h2>
        <div class="">
          <label for="password">name </label>
          <InputText v-model="flight.name" type="text" class="mt-3 w-full mb-3"/>
          <div class="mt-1 mb-5 text-red-500" v-if="error?.name">{{error.name[0]}}</div>
        </div>

        <div class="">
          <label for="password">link </label>
          <InputText v-model="flight.link" type="text" class="mt-3 w-full mb-3"/>
          <div class="mt-1 mb-5 text-red-500" v-if="error?.link">{{error.link[0]}}</div>

        </div>

        <div class="">
          <label for="password">discount </label>
          <InputNumber v-model="flight.discount" type="text" class="mt-3 w-full mb-3"/>
          <div class="mt-1 mb-5 text-red-500" v-if="error?.discount">{{error.discount[0]}}</div>

        </div>


        <div>
          <FileUpload id="password" @uploader="handleFileUpload" accept="image/*" required="true" multiple="true"
                      :custom-upload="true" autofocus :class="{ 'p-invalid': submitted  }">
            <template #empty>

              <img v-if="file!=''" :src="url" class="w-[200px] h-[90px]">
              <!-- <img v-else-if="dataEntred?.media?.length" v-for="data in dataEntred?.media" :src="data.original_url" class="w-[200px] h-[90px]"> -->
            </template>
          </FileUpload>


          <swiper
        @slideChange="onSlideChange"

        :navigation="true"
        :options="swiperOptions"
        :modules="modules"
        :scrollbar="{ draggable: true }"
        :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
        :breakpoints="{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }"
      >

        <SwiperSlide v-for=" img in elements"  >
          <div class="text-center  bg-teal-100 rounded-3xl m-2">
            <!-- Doctor -->
            <div class="bg-white rounded-3xl w-full m-auto">
            <img class="relative rounded-md" style="  height: 150px !important;"  :src="img?.original_url">

            <button class="absolute top-[7%] left-[5%]  bg-[#861d1d]  p-2 px-4 rounded-full "  @click="showdata(img.id)" :value="img.id"><svg  width="20px" height="20px" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#ffffff"></path></g></svg></button>
              <!-- <img class="w-[250px] h-[250px] m-auto" :src="image.original_url"> -->
            </div>

          </div>
          <!-- Doctor -->
        </SwiperSlide>
                       </swiper>

          <div class="mt-1 mb-5 text-red-500" v-if="error?.images">{{error.images[0]}}</div>




        </div>


        <Button type="submit" label="Submit" class="mt-3"/>
      </form>
    </div>
    <Toast/>
  </va-card>




</template>

<script setup>
import {useToast} from 'primevue/usetoast'
import axios from "axios";
import {ref, watch, onMounted, computed} from "vue";
import {useRoute} from "vue-router";
import {registerPlugin} from "filepond";
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

import {Pagination, Navigation, Autoplay} from "swiper/modules";
const modules = [Pagination, Navigation, Autoplay];

import {useRouter} from "vue-router";
const router = useRouter()
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';

registerPlugin(FilePondPluginFileEncode);
// import 'http://localhost:8000/media/152/AuxKJM3B9InTqZlXdlHwcgIpKsXMNfNepudOtbxd.png'
import vueFilePond from "vue-filepond";

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
)

const toast = useToast()
const elements = ref(null)
const flight = ref({
  name: '',
  link: '',
  discount: 0


})

const pond = ref(null)
const myFiles = ref([])
const route = useRoute();
const entred = ref(0)
const file = ref('')
const url = ref('')
const dataEntred = ref({})

const totalSize = ref(0);
const totalSizePercent = ref(0);
const files = ref([]);

const lang = ref([

{name:'English',value:"gb"},
  {name:'Arabic',value:"sa"},
  {name:'Azerbaijan',value:"az"},
  {name:'Georgia',value:"ge"},
  {name:'Russia',value:"ru"},
  {name:'Turkey',value:"tr"},
])


const langSelected = ref('gb')
const error = ref('')

const handleFileUpload = (e) => {
  console.log(e.files[0])
  files.value = e.files;

  file.value = e.files[0];
  url.value = URL.createObjectURL(file.value);
  console.log(file.value)

};

const onSubmit = () => {

  const body = new FormData();
  // for(let i=0; i<files.value.length ;i++){
  //   body.append('images[]', files.value[i])
  // }
  body.append("images", file.value);
  // body.append("images", files.value[0]);
  body.append("name", flight.value.name);
  body.append("link", flight.value.link);
  body.append("discount", flight.value.discount);


  axios.defaults.headers.common['local'] = langSelected.value

  axios.post(`/api/flights/${dataEntred.value.id}/update`, body).then((res) => {
    error.value=[]
    entred.value = 1
    dataEntred.value = res.data.flight
    toast.add({severity: 'success', summary: 'Successful', detail: 'Flight Updated', life: 3000})

  }).catch((el)=>{
    error.value = el.response.data.errors

    console.log(error.value)

  })

}


watch(langSelected, async (newValue, oldQuestion) => {
  console.log(dataEntred.value)

  flight.value.name = dataEntred.value?.name[newValue]== undefined ? '':dataEntred.value?.name[newValue]

})
const computedFiles = computed(() => {
  return myFiles.value
})
const showdata = (e)=>{
axios.post(`/api/accommodition/delete_image/${e}`).then((res) => {

countries.value = res.data.countries
console.log(countries.value)
})
setTimeout(() => {
  axios.get(`/api/flights/${route.params.id}`).then((res) => {
    elements.value=res.data.flight?.media
    flight.value.name = res.data.flight.name[langSelected.value]
    flight.value.link = res.data.flight.link
    flight.value.descount = res.data.flight.discount
    dataEntred.value = res.data.flight
    console.log(dataEntred.value)

    // res.data.flight.media.forEach((element)=>{
    //   // myFiles.value.push(element.original_url)
    //   // console.log(URL(element.or))
    //
    //   // pond.value.addFiles( element.original_url )
    //
    // })
    console.log(myFiles.value)

    // console.log(res.data.flight)




  })
}, 200);
}
onMounted(() => {

  axios.get(`/api/flights/${route.params.id}`).then((res) => {
    elements.value=res.data.flight?.media
    flight.value.name = res.data.flight.name[langSelected.value]
    flight.value.link = res.data.flight.link
    flight.value.descount = res.data.flight.discount
    dataEntred.value = res.data.flight
    console.log(dataEntred.value)

    // res.data.flight.media.forEach((element)=>{
    //   // myFiles.value.push(element.original_url)
    //   // console.log(URL(element.or))
    //
    //   // pond.value.addFiles( element.original_url )
    //
    // })
    console.log(myFiles.value)

    // console.log(res.data.flight)




  })
  const handleFileUpload = (e) => {

    files.value = e.files
    file.value = e.files[0]
    console.log(file.value)
    url.value = URL.createObjectURL(file.value);
  };

  const hidImg = document.getElementsByClassName("hidImg")
  console.log(hidImg[0]);

  //
  // for( let i =0 ;i< dataEntred.value.media.length ;i++)
  // {
  //   console.log(hidImg[i].src)
  // }


})


</script>

<style scoped>

</style>
