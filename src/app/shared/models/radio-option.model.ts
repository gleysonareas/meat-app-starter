export abstract class RadioOptionModel{ //assim se define uma classe e realiza o export da mesma; toda vez que
                        //alguma coisa é exportada em um lugar normalmente ela deverá ser importada
                        //em outro ponto da aplicação para que possa ser utilizada.
    constructor(public label: string, public value: any){ //dessa maneira definimos um constructor
                                                        //nunca esquecer de definir os parametros como: public para
                                                        // que o restante da aplicação tenha acesso e o 
                                                        //typeScript possa gerar essas propriedades.

    }
}