const fs = require('fs'),
PDFParser = require("pdf2json");

const pdfParser = new PDFParser();

function convertPdfToJson(){
    pdfParser.on("pdfParser_dataError", (errData: any) => console.error(errData.parserError) );
    pdfParser.on("pdfParser_dataReady", (pdfData: any) => {
        fs.writeFile("assets/json/drinkpdf1-122.json", JSON.stringify(pdfData), function(err: any, result: any) {
            if(err) console.log('error', err);
          });
    });

    pdfParser.loadPDF("assets/pdf/drinkpdf1-122.pdf");
}

export {convertPdfToJson}