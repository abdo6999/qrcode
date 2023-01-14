import screenshot from  'screenshot-desktop'
import Jimp from  'jimp'
import qrCode from  'qrcode-reader'
let i = 0
var t = setInterval(() => {
  screenshot().then((img) => {
    Jimp.read(img, function(err, image) {
      if (err) {
        console.error(err);
      }
      // Creating an instance of qrcode-reader module
      let qrcode = new qrCode();
      console.time('i')
      qrcode.callback = function(err, value) {
        // Printing the decrypted value
        if(typeof value !== 'undefined' && i == 0){
          console.log(value.result)
          i++
          clearInterval(t)
        }
      };
      // Decoding the QR code
      qrcode.decode(image.bitmap);
      console.timeEnd('i')
    });

  }).catch((err) => {
    
  })
}, 10);
