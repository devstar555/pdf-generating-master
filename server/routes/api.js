const express = require('express');
const router = express.Router();
const PDFdocument = require('pdfkit');
const fs = require('fs');

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

/* Generate pdf */
router.post('/createpdf', (req, res) => {

    const doc = new PDFdocument();
    let filename = req.body.filename;

    // Stripping special characters

    filename = encodeURIComponent(filename) + '.pdf';

    // Setting response to 'attachment' (download).
    // If you use 'inline' here it will automatically open PDFdocument

    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
    res.setHeader('Content-type', 'application/pdf');
    const content = req.body.content;
    console.log(content);
    doc.y = 300;
    doc.text(content, 50, 50);
    doc.pipe(fs.createWriteStream(filename));

    doc.font('Times-Roman')
        .fontSize(20)
        .text(content, 100, 100);
    doc.end();
});

module.exports = router;