<template>
    <div class="container" id="top">
       <div class="row justify-content-center">
        <div class="col-md-6">
             <h2>{{ isEditing ? 'Edit Note' : 'Add a New Note' }}</h2> 
               <!--title  -->
        <div class="row">
            <div class="col-9">
                <input type="text" v-model="titleNote"  placeholder="Enter title" class="form-control mb-3 " />
        
            </div>
            <div class="col-2">
                <router-link to="/">
                    <button class="btn btn-outline-danger"><b> Back</b></button>
                </router-link>
            </div>
        </div>
             <!-- Noter -->
        <textarea v-model="newNote" class="form-control" placeholder="Write your note..."></textarea>
        <!-- Btn UpDate & AddNote -->
        <button class="btn mt-3 w-100" :class="isEditing ? 'btn-warning' : 'btn-primary'"
            @click="isEditing ? updateNote() : addNote()" id="mainBtn">
            {{ isEditing ? 'Update Note' : 'Add Note' }}
        </button>
        </div>
       </div>
  
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

//  notes & title input
const titleNote = ref(localStorage.getItem('titleNote') || '');
const newNote = ref(localStorage.getItem('newNote') || '');
const isEditing = ref(false);
const isPinned = ref(false);

// Props
const props = defineProps({
    newNotes: Object,
    editIndex: Number
})

// heading and message required

// edit 
onMounted(() => {
    if (props.editIndex !== null && props.newNotes) {
        isEditing.value = true
        titleNote.value = props.newNotes.title || ''
        newNote.value = props.newNotes.nottes || ''
    }
})


const emit = defineEmits(['add-note', 'update-note']);
const router = useRouter();

// AddNotes & Time Store
function addNote() {
    if (titleNote.value.trim() && newNote.value.trim()) {
        emit('add-note', {
            title: titleNote.value,
            nottes: newNote.value,
            time: dateString,
            isPinned: isPinned.value,
             
        }) 
        resetForm() //  resetForm
        localStorage.setItem('noteTime', dateString);
    }else{
      swal('Error','Please Titlt and Message inter then Add Note','error')
    }
} 

//  updateNote  , title &  upDate Time
function updateNote() {
    emit('update-note', {
        title: titleNote.value,
        nottes: newNote.value,
        time: dateString, 
        isPinned: isPinned.value 
    })
    resetForm() //  resetForm
    localStorage.setItem('noteTime', dateString);
}

// go to Home & resetForm
function resetForm() {
    titleNote.value = ''
    newNote.value = ''
    isPinned.value = false
    isEditing.value = false
    router.push('/')
}

//  time Calculate
const now = new Date();

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
// Date
let day = days[now.getDay()];
let date = now.getDate();
let month = months[now.getMonth()];
let year = now.getFullYear();
//  Time
let hour = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();
let pe = "AM";


// (1 to 9) into (01 to 09) Date and Month
if (date < 10) date = "0" + date;
if (month < 10) month = "0" + month;

// setting 24Hours to 12 hours & AM PM
if (hour == 0) hour = 12;
else if (hour > 12) {
    hour = hour - 12;
    pe = "PM";
}

// (1 to 9) into (01 to 09) Hours , Min Sec
if (hour < 10) hour = "0" + hour;
if (min < 10) min = "0" + min;
if (sec < 10) sec = "0" + sec;

// Final Answer  
const dateTime = `${day} ${month}/${date}/${year} ${hour}:${min}:${sec} ${pe}`;
console.log(dateTime);
const dateString = dateTime.toString(); 
</script>

<style scoped>
#top{
    margin-top: 60px;
}
.container{
    min-height: 83.2vh;
}

textarea {
    height: 200px;
} 
 
</style>
