//Mi Primer Repositorio
var Opciones = {
    PIEDRA: 1,
    PAPEL: 2,
    TIJERA: 3,
  };

var Resultado= {
    GANADOR: 1,
    PERDEDOR: 2,
    EMPATE: 3,
  };

var Recompensas= {
    TIJERASDEORO: 1,
    PAPELDEORO: 2,
    DIAMANTE: 3,
    JUEGOPERDIDO: 4,
    TIROGANADO: 5,
    TIROPERDIDO : 6,
    TIROEMPATE : 7,
  };

function Juego(){//declare objeto
    this.vidas=3;
    this.puntaje=0;
    this.jugador='Pepito';
}

Juego.prototype.iniciar=function(){//se cre un prototype de la funcion Juego
    this.vidas=3;
    this.puntaje=0;
}
Juego.prototype.tiro=function(seleccionJugador, seleccionComputador){
    var resultado=this.verificarGanador(seleccionJugador,seleccionComputador);
    if (resultado==Resultado.GANADOR){
        return this.aumentarPuntaje();
    }
    else if(resultado==Resultado.PERDEDOR){
        this.vidas -=1;
        if (this.vidas==0){
            return Recompensas.JUEGOPERDIDO;
        }
        else {
            return Recompensas.TIROPERDIDO;
        }
    }
    else if(resultado==Resultado.EMPATE){
            return Recompensas.TIROEMPATE;

    }

}
Juego.prototype.generarJugadaComputador=function(){
    // Retorna un número aleatorio entre min (incluido) y max (excluido)
    var aleatorio = Math.floor(Math.random() * 3) + 1;
    switch (aleatorio){
        case 1: return Opciones.PIEDRA;
        case 2: return Opciones.PAPEL;
        case 3: return Opciones.TIJERA;
    }
  }

Juego.prototype.verificarGanador=function(seleccionJugador,seleccionComputador){
    if(seleccionJugador==Opciones.PIEDRA){
        if(seleccionComputador==Opciones.PAPEL){
            return Resultado.PERDEDOR;
        }
        else if (seleccionComputador==Opciones.TIJERA){
            return Resultado.GANADOR;
        }
        else if (seleccionComputador==Opciones.PIEDRA){
            return Resultado.EMPATE;
        }
    }
    else if(seleccionJugador==Opciones.PAPEL){
        if(seleccionComputador==Opciones.PAPEL){
            return Resultado.EMPATE;
        }
        else if (seleccionComputador==Opciones.TIJERA){
            return Resultado.PERDEDOR;
        }
        else if (seleccionComputador==Opciones.PIEDRA){
            return Resultado.GANADOR;
        }
    }
    else if(seleccionJugador==Opciones.TIJERA){
        if(seleccionComputador==Opciones.PAPEL){
            return Resultado.GANADOR;
        }
        else if (seleccionComputador==Opciones.TIJERA){
            return Resultado.EMPATE;
        }
        else if (seleccionComputador==Opciones.PIEDRA){
            return Resultado.PERDEDOR;
        }
    }

}

Juego.prototype.aumentarPuntaje=function(){
    this.puntaje=this.puntaje+100;
    if(this.puntaje==200){
        return Recompensas.TIJERASDEORO;
    }
    else if(this.puntaje==400){
        return Recompensas.PAPELDEORO;
    }
    else if(this.puntaje==500){
        return Recompensas.DIAMANTE;

    }
    else {
        return Recompensas.TIROGANADO;
    }
}
