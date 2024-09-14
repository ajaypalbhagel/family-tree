const mongoose = require('mongoose');

const familyMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  relationships: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FamilyMember'
  }]
});

module.exports = mongoose.model('FamilyMember', familyMemberSchema);
