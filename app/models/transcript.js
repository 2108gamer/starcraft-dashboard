const { model, models , Schema } = require("mongoose");
 
let transcript = new Schema({
    user: String,
    url: String,
    closedBy: String,
    fecha: String
    

})
 
export default models.Transcript || model("Transcripts", transcript);