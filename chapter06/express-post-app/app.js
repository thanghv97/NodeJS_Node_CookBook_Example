const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const index = require('./routes/index');

const PORT = process.env.PORT || 1711;

const app = express();
// The { extended: false } option instructs body-parser to use the querystring library for URL parsing. 
// Omitting this setting or setting it to true will instruct body-parser to use the qs library instead. 
// The main difference is that qs supports nested objects. 
// However, qs has options that if not configured correctly could lead to denial-of-service attacks.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", index);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});