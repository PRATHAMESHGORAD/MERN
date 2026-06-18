const empModel = require("../model/empmodel")


exports.addEmp = async(req,resp)=>{
    const new_emp = new empModel(req.body)
    const result = await new_emp.save()
    resp.status(200).json(result)
}

exports.showemps = async(req,resp)=>{
    const emps = await empModel.find()
    if (emps != null) {
        resp.status(200).json(emps)
    } else {
        resp.status(404).json({message: 'not employess'})
    }
}

exports.showEmp = async(req,resp)=>{
    const emp = await empModel.findById(req.params.id)
    if (emp != null) {
        resp.status(200).json(emp)
    } else {
        resp.status(404).json({message: 'not employes'})
    }
}

exports.updateEmp = async(req,resp)=>{
    const emp = await empModel.findByIdAndUpdate(req.params.id,req.body)
    if (emp != null) {
        resp.status(200).json({message: 'updated'})
    } else {
        resp.status(404).json({message: 'not updated'})
    }
}

exports.deleteEmp = async(req,resp)=>{
    const emp = await empModel.findByIdAndDelete(req.params.id)
     if (emp != null) {
        resp.status(200).json({message: 'deleted'})
    } else {
        resp.status(404).json({message: 'not deleted'})
    }
}

