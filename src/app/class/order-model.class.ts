class OrderModel{
    constructor(
        public address: string,
        public number: number,
        public optionalAddress: string,
        public paymentOption: string,
        public orderItems: OrderItemModel [] = []
    ){}
}

class OrderItemModel{
    constructor(public quantity: number, public menuId: string){

    }
}

export {OrderModel, OrderItemModel}
