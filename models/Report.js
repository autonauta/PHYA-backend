const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const reportSchema = new mongoose.Schema(
  {
    planta: {
      type: ObjectId,
      ref: "Plant",
    },
    operador: {
      type: ObjectId,
      ref: "User",
    },
    aireacion: Boolean,
    presion_soplador: Number,
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
    sedimentacion_lodos: Number,
    ph_entrada: Number,
    ph_salida: Number,
    cloro_salida: Number,
    pastillas_cloro: Number,
    desecho_lodos: Boolean,
    disposicion_lodos: Boolean,
    grasa_sopladores: Boolean,
    aceite_sopladores: Boolean,
    grasa_rototamiz: Boolean,
    aceite_rototamiz: Boolean,
    dato_1: Number,
    dato_2: Number,
    dato_3: Number,
    dato_4: Number,
    dato_5: Number,
    comentarios: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", reportSchema);
