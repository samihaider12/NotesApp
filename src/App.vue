 <template> 
  <div class="app-layout d-flex flex-column min-vh-100">
    
  <Navbar /> 
    <main class="flex-grow-1">
  <router-view
  :noteList="sortedNotes"
  :newNotes="newNotes"
  :editIndex="editIndex"
  @add-note="addNote"
  @delete-note="deleteNote"
  @edit-note="editNote"
  @update-note="updateNote"
  @toggle-pin="togglePin"
/>
</main>
<Footer/>
</div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
const noteList = ref(JSON.parse(localStorage.getItem('notesData')) || [])
const newNotes = ref({ title: '', nottes: '' })
const editIndex = ref(null)


// Pin Notes Ko Top pa show Kara ga
const sortedNotes = computed(() => {
  return [...noteList.value].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1
    if (!a.isPinned && b.isPinned) return 1
    return 0
  })
})
 
watch(noteList, (newVal) => {
  localStorage.setItem('notesData', JSON.stringify(newVal))
}, { deep: true })


function togglePin(note) {
  const foundNote = noteList.value.find(n => n.title === note.title && n.nottes === note.nottes)
  if (foundNote) {
    foundNote.isPinned = !foundNote.isPinned
  }
}
  
function addNote(index) {
  noteList.value.push(index)
  
}

function deleteNote(index) {
  noteList.value.splice(index, 1)
} 

function editNote(index) {
  newNotes.value = noteList.value[index] 
  editIndex.value = index
}

function updateNote(updatedNote) {
  if (editIndex.value !== null) {
    noteList.value[editIndex.value] = updatedNote
    editIndex.value = null
    newNotes.value = { title: '', nottes: '' }
      
  }
}

</script>

