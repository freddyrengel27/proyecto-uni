<template>
    <header class="header">
      <div class="header__center">
        <img src="../assets/img/escudo.png.gif" alt="logo" class="header__logo"/>
        <div class="header__titles">
          <h4>UNEFA</h4>
          <h3>
          Universidad Nacional Experimental Politécnica de la fuerzas Armadas
          Nacional
          </h3>
          <h2>Sistema de Control de la Oferta Académica</h2>
        </div>
    </div>
      <div class="contenedor__fecha">
        <p class="p__hora">{{Ihora}} : {{Iminutos}} : {{Isegundos}}</p>
        <p class="p__fecha">{{Idia}} / {{Imes}} / {{IYear}}</p>
      </div>
  </header>
</template>

<script>
import { onMounted, ref, computed } from '@vue/runtime-core'
export default{
    name: "Header",
    setup(){

      const Ihora = ref(0);
      const Iminutos = ref(0);
      const Isegundos = ref(0);
      const Idia = ref(0);
      const Imes = ref(0);
      const IYear = ref(0)

      setInterval(() =>{
         let f = new Date();

      let dian = f.getDay();

      let fecha = f.getDate();

      let mes = f.getMonth();

      let años = f.getFullYear();
    
      Idia.value = fecha
      Imes.value = mes + 1
      IYear.value = años

      let hora = f.getHours();

      let minutos = f.getMinutes();

      let segundos = f.getSeconds();



      if (segundos < 10) {
        segundos = `0${segundos}`;
      }

      if (minutos < 10) {
        minutos = `0${minutos}`;
      }

      if (hora < 10) {
        hora = `0${hora}`;
      }

      Ihora.value = hora;
      Iminutos.value = minutos;
      Isegundos.value = segundos;
      }, 1000)
       
     const setRelog = () => {
      let f = new Date();

      let dian = f.getDay();

      let fecha = f.getDate();

      let mes = f.getMonth();

      let años = f.getFullYear();
    
     

      let hora = f.getHours();

      let minutos = f.getMinutes();

      let segundos = f.getSeconds();



      if (segundos < 10) {
        segundos = `0${segundos}`;
      }

      if (minutos < 10) {
        minutos = `0${minutos}`;
      }

      if (hora < 10) {
        hora = `0${hora}`;
      }

      Ihora.value = hora;
      Iminutos.value = minutos;
      Isegundos.value = segundos;
    }

   

      return{
        Ihora,
        Iminutos,
        Isegundos,
        Idia,
        Imes,
        IYear
      }
    }
}


</script>