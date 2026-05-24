import mongoose from "mongoose"
const medicalRecordSchema = new mongoose.Schema({

    // কোন patient এর record?
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },

    // কোন doctor treat করছে?
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },

    // কোন hospital এ?
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    },

    // Medical details
    prescription: {
        type: String,
        required: true
    },

    notes: {
        type: String, // doctor's notes
    },

    recordDate: {
        type: Date,
        default: Date.now
    },

    dischargeDate: {
        type: Date,
    }

}, { timestamps: true })
export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);