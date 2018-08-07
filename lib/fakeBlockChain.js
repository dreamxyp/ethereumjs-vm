const Buffer = require('safe-buffer').Buffer
const ircUtils = require('icjs-util')

module.exports = {
  getBlock: function (blockTag, cb) {
    var hash

    if (Buffer.isBuffer(blockTag)) {
      hash = ircUtils.sha3(blockTag)
    } else if (Number.isInteger(blockTag)) {
      hash = ircUtils.sha3('0x' + ircUtils.toBuffer(blockTag).toString('hex'))
    } else {
      cb(new Error('Unknown blockTag type'))
    }

    var block = {
      hash: function () {
        return hash
      }
    }

    cb(null, block)
  },

  delBlock: function (hash, cb) {
    cb(null)
  }
}
