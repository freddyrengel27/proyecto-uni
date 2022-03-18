<template>
<div class="contenedorModal">

    <div class="espacio">

        <div class="contendor-formulario" v-if="!showHorarios">
            <h4>Edicion de horario</h4>
            <form>
                <div class="contendor-input losinput">
                <label for="nombre">Titulo</label>
                <input type="text" class="form-control" id="nombre" placeholder="Enter titulo" v-model="titulo">
                </div>

                <div class="contendor-input">
             <label for="exampleInputEmail1">Seleccione una carrera</label>    
            <select class="form-control" id="exampleFormControlSelect1" v-model="carrera" >
             <option v-for="carreras in carreras" :key="carreras.id_carrera" :value="carreras.id_carrera" >{{carreras.carrera}}</option>
            </select>
            </div>

            <div class="contendor-input losinput">
                 <label for="turno">Seleccione el turno</label>
                <select class="form-control" id="turno" v-model="turno">
                <option>Diurno</option>
                <option>Nocturno</option>

                 </select>
                 </div>

                <div class="contendor-input losinput">
                 <label for="semestre">Seleccione el semestre</label>
                <select class="form-control" id="semestre" v-model="semestre">
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
            </form>
            <div class="contenedor-button botones3">
                <button class="btn btn-success" @click="getCosas()">Siguiente</button>
                <button class="btn btn-danger">Cancelar</button>
            </div>
        </div>

        <div class="contendor-horarios" v-else>
            <div class="zona-drag">
                <div class="drag-materia" v-for="materia in getdrag(1)" :key="materia.materia" draggable="true" @dragstart="transferencia($event, materia)">
                    <p>{{materia.materia}}</p>
                </div>

            </div>
            <div class="horario">
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
                    <div class="dia-items" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getdrag(2)" :key="mate.materia">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                </div>
                <div class="horario-dia">
                    <div class="dia-items"><p>Marte</p></div>
                    <div class="dia-items" @drop="onDrop($event, 3)" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getdrag(3)" :key="mate.materia">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                </div>
                <div class="horario-dia">
                    <div class="dia-items"><p>Miercoles</p></div>
                    <div class="dia-items" @drop="onDrop($event, 4)" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getdrag(4)" :key="mate.materia">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                </div>
                <div class="horario-dia">
                    <div class="dia-items"><p>Jueves</p></div>
                    <div class="dia-items" @drop="onDrop($event, 5)" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getdrag(5)" :key="mate.materia">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                </div>
                <div class="horario-dia">
                    <div class="dia-items"><p>Viernes</p></div>
                    <div class="dia-items" @drop="onDrop($event, 6)" @dragenter.prevent @dragover.prevent>
                        <div class="drop-materia" v-for="mate in getdrag(6)" :key="mate.materia">
                            <p>{{mate.codigo}}</p>
                        </div>
                    </div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                </div>
                <div class="horario-dia">
                    <div class="dia-items">Sabado</div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                    <div class="dia-items"></div>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>

export default {
    name: "ModalHorario",
    
    
    
}
</script>