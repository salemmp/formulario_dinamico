const cantidad_equipos=document.getElementById('cantidad_equipos')
const equipos=document.getElementById('equipos')

console.log(seleccion_de_equipo)
cantidad_equipos.addEventListener('input',(e)=>{
    const seleccion_de_equipo=document.getElementById('seleccion_de_equipo').value
    let contenido=''
    const cantidad=e.target.value

    for(let i=0;i<cantidad;i++){
        contenido+=`<div class="cartas" id='equipos_datos${i}'>
        <h4>${seleccion_de_equipo} ${i+1}</h4>
        <div class=cuerpo_cartas>
        
        <label for="">Tipo de Servicio</label>
        <select name="" id="">
            <option value="proyecto">Proyecto</option>
            <option value="asesoria">Asesoria</option>
            <option value="presupuesto">Presupuesto</option>
            <option value="diagnostico">Diagnostico/Revision</option>
            <option value="instalacion">Instalacion</option>
            <option value="desinstalacion">Desinstalacion</option>
            <option value="mantenimiento">Mantenimiento</option>
            <option value="reparacion">Reparacion</option>
        </select>
        <label for="">Tipo de Equipo</label>
        <select name="" id="">
            <option value="aparato_de_ventana">Aparato de Ventana</option>
            <option value="mini_split">Mini Split</option>
            <option value="split">Split</option>
            <option value="multi_split">Multi Split</option>
            <option value="casette">Casette</option>
        </select>
        <label for="">Capacidad</label>
        <div class="container_capacidad">
        <input type="text">
        <select name="" id="">
            <option value="BTU">BTU</option>
            <option value="TR">TR</option>
        </select>
        </div>
        </div>
    </div>`
    }
    equipos.innerHTML=contenido
})


