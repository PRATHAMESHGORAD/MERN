const hotelModel = require("../model/hotel")

exports.addHotel = async(req,resp)=>{
    const new_hotel = new hotelModel(req.body)
    const result = await new_hotel.save()
    resp.status(200).json(result)
}

exports.showhotels = async(req,resp)=>{
    const hotels = await hotelModel.find()
    if ( hotels != null) {
        resp.status(200).json(hotels)
    } else {
        resp.status(404).json({message: 'not hotels'})
    }
}
exports.showHotel = async(req,res)=>{
    const hotel = await hotelModel.findById(req.params.id)

    if(hotel){
        res.status(200).json(hotel)
    }else{
        res.status(404).json({message:"Hotel not found"})
    }
}



exports.updateHotel = async(req,resp)=>{
    const hotel = await hotelModel.findByIdAndUpdate(req.params.id,req.body)
    if ( hotel != null) {
        resp.status(200).json(hotel)
    } else {
        resp.status(404).json({message: 'not updated'})
    }
}

exports.deleteHotel = async(req,resp)=>{
    const hotel = await hotelModel.findByIdAndDelete(req.params.id,)
    if ( hotel != null) {
        resp.status(200).json(hotel)
    } else {
        resp.status(404).json({message: 'not deleted'})
    }
}

