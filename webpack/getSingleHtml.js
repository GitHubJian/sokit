const temp = `
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>

    <link href="./dll/css/vendor.css" rel="stylesheet">
</head>

<body>
    <div id="app"></div>

    <script src="./dll/js/vendor.js"></script>
    <script src="./js/#script#.js"></script>
</body>

</html>
`;

const { pathConfig } = require('./../config');
const path = require('path');
const fs = require('fs-extra');
const { writeFileSync } = require('fs');

const getSingleHtml = async ([k, v]) => {
    const content = temp.replace('#script#', k);
    const filePath = path.resolve(pathConfig.dist, `${k}.html`);
    await fs.ensureFileSync(filePath);
    await writeFileSync(filePath, content);
};

module.exports = { getSingleHtml };
