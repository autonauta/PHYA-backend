const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const reportSchema = new mongoose.Schema(
  {
    plant: {
      type: ObjectId,
      ref: "Plant",
    },
    operator: {
      type: ObjectId,
      ref: "User",
    },
    aireacion: Boolean,
    presion_soplador: String,
    flujo_alim: Boolean,
    flujo_ret: Boolean,
    flujo_desnatador: Boolean,
    flujo_tr: Boolean,
    bombas: Boolean,
    limpieza_clarificador: Boolean,
    limpieza_carcamo: Boolean,
    limpieza_criba: Boolean,
    limpieza_filtros: Boolean,
    limpieza_clorador: Boolean,
    limpieza_cisterna: Boolean,
    limpieza_rototamiz: Boolean,
    sedimentacion_lodos: String,
    ph_entrada: String,
    ph_salida: String,
    cloro_salida: String,
    pastillas_cloro: String,
    desecho_lodos: Boolean,
    disposicion_lodos: Boolean,
    grasa_sopladores: Boolean,
    aceite_sopladores: Boolean,
    grasa_rototamiz: Boolean,
    aceite_rototamiz: Boolean,
    grafica_sedimentacion: [String],
    comentarios: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", reportSchema);
