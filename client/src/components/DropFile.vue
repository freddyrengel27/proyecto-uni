<template>
    <div class="respaldo__targeta dropFile" 
            @dragenter.prevent="toggleActive" 
            @dragleave.prevent="toggleActive" 
            @dragover.prevent 
            @drop.prevent="fileDrop"
            :class="{'activeFile' : active}"
            >
                <span>Suelta tu archivo aqui</span>
                <span>o</span>
                <label for="dropzoneFile">Seleccione su archivo</label>
                <input type="file" id="dropzoneFile">
                <button v-if="respaldoFile" class="btn btn-primary sendRes">Subir</button>
                <span class="nombreArchivo" v-if="respaldoFile">{{respaldoFile.name}}</span>
            </div>
</template>

<script>
    import {ref} from "vue";

export default {


    name: "DropFile",
    setup(){

        const active = ref(false);
        const respaldoFile = ref(null);

          const fileDrop = (e) =>{
            toggleActive()    
            respaldoFile.value = e.dataTransfer.files[0];
            console.log(respaldoFile.value.name)
        };

        const toggleActive = () =>{
            active.value = !active.value;
        };


        return{
            active,
            toggleActive,
            fileDrop,
            respaldoFile
        }

        
    }
}
</script>