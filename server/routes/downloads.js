const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/:filename', (req, res) => {
    const filename = req.params.filename; 
    const filePath = path.join(__dirname, '..', 'public', 'downloads', filename);

    if (!fs.existsSync(filePath)) {
        return res.status(404).send('File not found');
    }

    res.download(filePath, filename, (err) => {
        if (err) {
            console.error('Download error: ', err);
            
            if (!res.headersSent) {
                res.status(500).send('Could not download the file.');
            }
        }
    });
});

module.exports = router;
