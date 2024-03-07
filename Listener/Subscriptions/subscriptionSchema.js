// Done By Soumya on 20/02


const mongoose = require("mongoose");

const SubSchema = mongoose.Schema({
    listenerid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "listeners",
    },
    podcastid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "creatorsPodcast",
      },
    paymentstatus: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date
    },
    isactive: {
        type: Boolean,
        default: false
    }
});
module.exports = mongoose.model("subscriptions", SubSchema);