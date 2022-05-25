<template>
<div>
<div class="contenedor__form__horario" v-if="!showDiseño">
    <form class="form__horario" @submit.prevent>
        <h4>Diseño de Horarios</h4>
        <div class="contendor-input">
            <input type="text" class="form-control"  aria-describedby="emailHelp" v-model="dataHorario.titulo">
        </div>
        <div class="contendor-input">
            <label  class="form-label">Seleccione una carrera</label>
            <select class="form-control" v-model="dataHorario.cod_carrera">
                <option v-for="carrera in carreras" :key="carrera.id_carrera" :value="carrera.id_carrera">{{carrera.carrera}}</option>
            </select>
        </div>
        <div class="contendor-input">
            <label  class="form-label">Seleccione semestre</label>
            <select class="form-control" v-model="dataHorario.semestre">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
            </select>
        </div>
        <div class="contendor-input">
            <label  class="form-label">Seleccione turno</label>
            <select class="form-control" v-model="dataHorario.turno">
                <option>Diurno</option>
                <option>Nocturno</option>
            </select>
        </div>
        <div class="contenedor__horario__btn">
            <button class="btn btn-success" @click="nextHorario">Siguiente</button>
            <button class="btn btn-danger" @click="$emit('backMenu')">Cancelar</button>
        </div>
    </form>
</div>
<div class="contendor-horarios" v-else>
            <div class="zona-drag">
                <div class="drag-materia"  draggable="true" @dragstart="transfer($event, materia)" v-for="materia in materiasDrag" :key="materia.codigo">
                    <p>{{materia.codigo}}</p>
                </div>

            </div>
            <div class="horario" ref="horario">
                <div class="horario-horas">
                    <div class="horas-items"><p>Hora</p></div>
                    <div class="horas-items"><p>7:00-7:45</p></div>
                    <div class="horas-items"><p>7:45-8:30</p></div>
                    <div class="horas-items"><p>8:30-9:15</p></div>
                    <div class="horas-items"><p>9:15-10:00</p></div>
                    <div class="horas-items"><p>10:00-10:45</p></div>
                    <div class="horas-items"><p>10:45-11:30</p></div>
                    <div class="horas-items"><p>11:30-12:15</p></div>
                    <div class="horas-items"><p>12:15-13:00</p></div>
                    <div class="horas-items"><p>13:00-13:45</p></div>
                    <div class="horas-items"><p>13:45-14:30</p></div>
                    <div class="horas-items"><p>14:30-15:15</p></div>
                    <div class="horas-items"><p>15:15-16:00</p></div>
                    <div class="horas-items"><p>16:00-16:45</p></div>
                    <div class="horas-items"><p>16:45-17:00</p></div>
                </div>
                <div class="horario-dia">
                    <div class="dia-items"><p>Lunes</p></div>

                    <div class="dia-items" @drop="onDrop($event, 'l-700-745')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('l-700-745')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'l-745-830')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('l-745-830')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'l-830-915')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('l-830-915')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'l-915-1000')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('l-915-1000')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'l-1000-1045')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('l-1000-1045')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'l-1045-1130')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios( 'l-1045-1130')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'l-1130-1215')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('l-1130-1215')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'l-1215-1300')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('l-1215-1300')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'l-1300-1345')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('l-1300-1345')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'l-1345-1430')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('l-1345-1430')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'l-1430-1515')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('l-1430-1515')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'l-1515-1600')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('l-1515-1600')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'l-1600-1645')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('l-1600-1645')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'l-1645-1700')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('l-1645-1700')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    
                </div>
                <div class="horario-dia">
                    <div class="dia-items"><p>Marte</p></div>

                     <div class="dia-items" @drop="onDrop($event, 'm-700-745')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('m-700-745')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'm-745-830')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('m-745-830')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'm-830-915')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('m-830-915')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'm-915-1000')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('m-915-1000')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'm-1000-1045')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('m-1000-1045')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'm-1045-1130')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios( 'm-1045-1130')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'm-1130-1215')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('m-1130-1215')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'm-1215-1300')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('m-1215-1300')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'm-1300-1345')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('m-1300-1345')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'm-1345-1430')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('m-1345-1430')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'm-1430-1515')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('m-1430-1515')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'm-1515-1600')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('m-1515-1600')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'm-1600-1645')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('m-1600-1645')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'm-1645-1700')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('m-1645-1700')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>

                </div>

                <div class="horario-dia">
                    <div class="dia-items"><p>Miercoles</p></div>
                    
                    <div class="dia-items" @drop="onDrop($event, 'mi-700-745')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('mi-700-745')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'mi-745-830')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('mi-745-830')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'mi-830-915')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('mi-830-915')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'mi-915-1000')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('mi-915-1000')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'mi-1000-1045')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('mi-1000-1045')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'mi-1045-1130')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios( 'mi-1045-1130')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'mi-1130-1215')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('mi-1130-1215')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'mi-1215-1300')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('mi-1215-1300')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'mi-1300-1345')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('mi-1300-1345')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'mi-1345-1430')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('mi-1345-1430')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'mi-1430-1515')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('mi-1430-1515')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'mi-1515-1600')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('mi-1515-1600')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'mi-1600-1645')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('mi-1600-1645')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'mi-1645-1700')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('mi-1645-1700')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>


                </div>
                <div class="horario-dia">
                    <div class="dia-items"><p>Jueves</p></div>
                    
                    <div class="dia-items" @drop="onDrop($event, 'j-700-745')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('j-700-745')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'j-745-830')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('j-745-830')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'j-830-915')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('j-830-915')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'j-915-1000')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('j-915-1000')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'j-1000-1045')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('j-1000-1045')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'j-1045-1130')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios( 'j-1045-1130')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'j-1130-1215')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('j-1130-1215')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'j-1215-1300')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('j-1215-1300')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'j-1300-1345')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('j-1300-1345')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'j-1345-1430')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('j-1345-1430')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'j-1430-1515')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('j-1430-1515')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'j-1515-1600')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('j-1515-1600')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'j-1600-1645')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('j-1600-1645')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'j-1645-1700')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('j-1645-1700')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>


                </div>
                <div class="horario-dia">
                    <div class="dia-items"><p>Viernes</p></div>

                    <div class="dia-items" @drop="onDrop($event, 'v-700-745')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('v-700-745')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'v-745-830')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('v-745-830')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'v-830-915')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('v-830-915')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'v-915-1000')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('v-915-1000')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'v-1000-1045')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('v-1000-1045')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'v-1045-1130')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios( 'v-1045-1130')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'v-1130-1215')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('v-1130-1215')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'v-1215-1300')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('v-1215-1300')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'v-1300-1345')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('v-1300-1345')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'v-1345-1430')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('v-1345-1430')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'v-1430-1515')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('v-1430-1515')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'v-1515-1600')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('v-1515-1600')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'v-1600-1645')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('v-1600-1645')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 'v-1645-1700')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('v-1645-1700')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    
                </div>
                <div class="horario-dia">
                    <div class="dia-items">Sabado</div>
                    
                    <div class="dia-items" @drop="onDrop($event, 's-700-745')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('s-700-745')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 's-745-830')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('s-745-830')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 's-830-915')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('s-830-915')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 's-915-1000')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('s-915-1000')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 's-1000-1045')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('s-1000-1045')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 's-1045-1130')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios( 's-1045-1130')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 's-1130-1215')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('s-1130-1215')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 's-1215-1300')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('s-1215-1300')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 's-1300-1345')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('s-1300-1345')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 's-1345-1430')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('s-1345-1430')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 's-1430-1515')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('s-1430-1515')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 's-1515-1600')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('s-1515-1600')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 's-1600-1645')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('s-1600-1645')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items" @drop="onDrop($event, 's-1645-1700')" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getMateriasHorarios('s-1645-1700')" :key="mate.codigo">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>

                    
                </div>
            </div>
            <div >
            <button class="btn btn-success" @click="setRegistrar">Registrar</button>
            <button class="btn btn-danger" @click="$emit('backMenu')">Cancelar</button>
            </div>


        </div>

       
</div>

</template>

<script>
import { computed, onBeforeMount, reactive, ref } from '@vue/runtime-core'
import {getCarerras, getMaterias, getProfesores, global} from "../tools/request-axios.js"
import socket from "../socket/socket.js";
import {jsPDF} from "jspdf";
import html2canvas from "html2canvas";
import generadorPDF from "../tools/generadorPdf.js"
import axios from "axios";
import {useStore} from "vuex"
import reducePDF from "../tools/reducerPdf.js";

export default {
    name: "DiseñoHorario",
    setup(){
        const store = useStore();
        const dataHorario = reactive({
            titulo: "",
            cod_carrera:"",
            carrera: "",
            semestre: 1,
            turno:"",
        });
        const horario = ref(null);
        const showDiseño = ref(false);
        const carreras = ref([]);
        const materias = ref([]);
        const profesores = ref([]);
        const materiasDrag = ref([]);
        const materiasHorario = ref([]);
        const targetMateria = ref([]);

        onBeforeMount( async () =>{
            carreras.value = await getCarerras()
        });

        const setCarrera = () =>{
                let carrera = carreras.value.filter(carrera => carrera.id_carrera == dataHorario.cod_carrera)
                dataHorario.carrera = carrera[0].carrera   
        };

        const nextHorario = async () =>{
            const mate = await getMaterias(dataHorario.cod_carrera)
            const prof = await getProfesores()
            materias.value = mate.filter(mat => mat.semestre == dataHorario.semestre)
            setCarrera()
            for(var i in prof){
                for(var j in prof[i].materia_asignada.split(",")){
                    for(var k in materias.value){
                        if(prof[i].materia_asignada.split(",")[j] == materias.value[k].cod_materia){
                            profesores.value.push({documento: prof[i].documento, codigo: materias.value[k].cod_materia, materia: materias.value[k].asignatura, horas: materias.value[k].horas_materias, idM:"", horario: ""})
                        }
                    }
                }
            }
            for(var r in profesores.value){
                for(let s = 0; s < profesores.value[r].horas; s++){
                    let clone = Object.assign({}, profesores.value[r])
                    clone.idM = s + 1
                    materiasDrag.value.push(clone)
                }
            }
           showDiseño.value = true;
        };
         
         const transfer = (e, iten) =>{
            e.dataTransfer.dropEffect = "move"
            e.dataTransfer.effectAllowed = "move"
            e.dataTransfer.setData("itemID", iten.codigo)
         };

        const getMateriasHorarios = (id) =>{
            const mate = materiasHorario.value.filter(mat => mat.horario == id)
            
            if(mate.length > 0){
                if(id == mate[0].horario){
                return mate;
                }
            }
                
        };

        const onDrop = (e, id) =>{
            let mate = e.dataTransfer.getData("itemID");
            const obj = materiasDrag.value.find(mat => mat.codigo == mate);
            const clone = {...obj};
            clone.horario = id
            socket.emit("verificacion", clone);
            targetMateria.value = clone;
        };

        socket.on("resVerificacion", data =>{
            if(data.length < 1){
                removeItemMateria()
            }else{
                let validacionHora = data.filter(data => data.cod_dia == targetMateria.value.horario);
                if(validacionHora.length >= 1){
                    console.log("error")
                }else{
                    removeItemMateria()
                }
            }
        });

        const removeItemMateria = () =>{
            let removeMateria = materiasDrag.value.find(mat => mat.codigo == targetMateria.value.codigo);
            materiasDrag.value.pop(removeMateria)
            materiasHorario.value.push(targetMateria.value)
        };
        
        const createPDF = () =>{
            const doc = generadorPDF()

            doc.setFontSize(11).text(`Carrera: ${dataHorario.cod_carrera} ${dataHorario.carrera}   Semestre: ${dataHorario.semestre}   Turno: ${dataHorario.turno}`, 100, 55, "center")
            html2canvas(horario.value, {background: "white", scale: 3}
            ).then((canvas) =>{
                const img = canvas.toDataURL("image/jpeg", 3)
                let bufferX = 2;
                let bufferY = 60;
                let imgProps = doc.getImageProperties(img)
                let pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
                let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                
                doc.addImage(img,"JPEG", bufferX, bufferY, pdfWidth, pdfHeight, undefined, "FAST")

                doc.setFontSize(11).text("Horario diseñado por " + store.state.user.nombre + " " + store.state.user.apellido, 50, 165)
               
               doc.setFontSize(8).text("Pagina 1 de 1", 150, 300, "center")

               const dataurl = doc.output("blob");

               const archivo = new FormData();
               archivo.append("dataHorario", dataurl, "horario.pdf")
                archivo.append("titulo", dataHorario.titulo)
                archivo.append("carrera", dataHorario.cod_carrera)
                archivo.append("semestre", dataHorario.semestre);
            
                axios.post(global + "sabehorario", archivo)
                .then(res => console.log(res))
               
            }) 
            
        };

        const setRegistrar = async () =>{
            
            const data = {
                info: dataHorario,
                horario: materiasHorario.value 
            };

            const res = await axios.post(global + "addhorario", data);

           await createPDF();
           
        };
        

        return{
            materias,
            carreras,
            dataHorario,
            showDiseño,
            profesores,
            nextHorario,
            materiasDrag,
            transfer,
            getMateriasHorarios,
            onDrop,
            createPDF,
            horario,
            setRegistrar
        }
    }
}

</script>