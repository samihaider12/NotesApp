<template>
    <div class="container" id="top">
        <!--  Search  -->
        <div class="d-flex justify-content-between align-items-center mb-3">
            <input type="text" class="form-control w-50" placeholder="Search..." v-model="searchTerm" />
         <!-- + New Note -->
            <router-link to="/newNotes">
                <button class="btn bg-light">
                    <img src="../assets/plus.png" alt="" style="height: 20px; width: 20px;" />
                    <b> New Note</b>
                </button>
            </router-link>
        </div>

             <!-- Notes List -->
        <div class="row">

            <div class="col-md-4 mb-3" id="notesScroll" v-for="(note, index) in filteredNotes" :key="index">
                <div class="card p-3 shadow-sm position-relative">
                    <h5 class="text-primary mt-3">{{ note.title }}</h5>
                    <p>{{ note.nottes }}</p>
                <!--Time Show  -->
                    <p class="text-muted time">{{ note.time }}</p>
                    <!-- Pin -->        
                            <button class="btn btn-sm" @click="togglePin(note)" id="check">
                               {{ note.isPinned ? '📍 Unpin' : '📌 Pin' }}
                            </button>

                    <button class="btn btn-outline-light btn-sm box1" @click="deleteNote(index)">
                        <img src="../assets/del1.png" alt="" id="dele" />
                    </button>
                    <button class="btn btn-outline-light btn-sm box2" @click="editNote(index)">
                        <img src="../assets/edit.png" alt="" id="edit" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import router from './router'
const props = defineProps({
    noteList: Array,
})

const searchTerm = ref('')

const filteredNotes = computed(() => {
    return props.noteList.filter(note =>
        note.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        note.nottes.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
});

 

const emit = defineEmits(['toggle-pin', 'delete-note', 'edit-note'])

function togglePin(index) {
  emit('toggle-pin', index)
}
 
function deleteNote(index) {
    emit('delete-note', index)
}

function editNote(index) {
    emit('edit-note', index)
    router.push('/newNotes')
}
 


</script>

<style scoped>
#top{
    margin-top: 60px;
}
.container{
    min-height: 82.2vh;
}
#notesScroll {
    max-height: 165px;
    overflow: hidden;
}

.box1 {
    height: 25px;
    width: 25px;
    position: absolute;
    top: 3px;
    right: 35px;
}

.box2 {
    height: 25px;
    width: 25px;
    position: absolute;
    top: 3px;
    right: 3px;
}

#edit {
    position: relative;
    top: -5px;
    right: 3px;
}

#dele {
    position: relative;
    top: -5px;
    right: 4px;
}

.time {
    position: absolute;
    top: 3px;
    right: 70px;
}
#check{
    position:  absolute;
    top: 1px;
    left: 3px;
}
</style>
