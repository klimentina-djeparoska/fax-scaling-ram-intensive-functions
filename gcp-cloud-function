const functions = require('@google-cloud/functions-framework');
const {Storage} = require('@google-cloud/storage');
const {performance} = require('perf_hooks');
const storage = new Storage();
var async = require('async');
var gm = require('gm')
            .subClass({ imageMagick: true }); // Enable ImageMagick integration.
// constants
var WEB_WIDTH_MAX  = 150;
var WEB_HEIGHT_MAX = 150;

functions.http('handler', (req, res) => {
    // Read options from the event.
    const startTime = performance.now();
    console.log("Starting with processing images");
    var srcBucket = 'fax-ram-test';
    // Object key may have spaces or unicode non-ASCII characters.
    var srcKey = 'image1.jpg';
    var srcKey1 = 'image2.jpg';
    var srcKey2 = 'image3.jpg';
    var srcKey3 = 'image4.jpg';
    var srcKey4 = 'image5.jpg';
    //  var dstBucket = srcBucket + "-resized";
    var dstBucket = srcBucket;
    var imageResponse;
    // Infer the image type.
    var typeMatch = srcKey.match(/\.([^.]*)$/);
    if (!typeMatch) {
        callback("Could not determine the image type.");
        return;
    }
    var imageType = typeMatch[1];
    if (imageType.toUpperCase() != "jpg".toUpperCase() && imageType.toUpperCase() != "png".toUpperCase() && imageType.toUpperCase() != "jpeg".toUpperCase()) {
        callback('Unsupported image type: ${imageType}');
        return;
    }
    console.log("****************before async******************");
    // Download the image from S3, transform, and upload to a different S3 bucket.
    async.waterfall([
        function download(next) {
            // Download the image from S3 into a buffer.
            console.log('Download image', srcBucket, srcKey);
            storage.bucket(srcBucket)
            .file(srcKey)
            .download({}, next);
        },
        function transformWebMax(response, next) {
            console.log('Resize image', response);
            gm(response)
                .resize(WEB_WIDTH_MAX, WEB_HEIGHT_MAX, '^')
                .gravity('Center')
                .crop(WEB_WIDTH_MAX, WEB_HEIGHT_MAX)
                .toBuffer('jpeg', function (err, buffer) {
                    if (err) {
                        console.log(err, err.stack);
                        return err;
                    } 
                    next(null, response, buffer);
                });
        },
        function uploadWebMax(response, buffer, next) {
            // Stream the transformed image to a different S3 bucket.
            console.log('Upload resized image');
            var dstKeyResized = "resized/" + srcKey;
             const file = storage.bucket(dstBucket).file(dstKeyResized);
            file.save(buffer,  function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                } else {
                    console.log('uploaded to web-max Successfully !!');
                    next();
                }
            });
        },
        function download1(next) {
            // Download the image from S3 into a buffer.
            console.log('Download image', srcBucket, srcKey1);
            storage.bucket(srcBucket)
            .file(srcKey1)
            .download({}, next);
        },
        function transformWebMax(response, next) {
            console.log('Resize image', response);
            gm(response)
                .resize(WEB_WIDTH_MAX, WEB_HEIGHT_MAX, '^')
                .gravity('Center')
                .crop(WEB_WIDTH_MAX, WEB_HEIGHT_MAX)
                .toBuffer('jpeg', function (err, buffer) {
                    if (err) {
                        console.log(err, err.stack);
                        return err;
                    } 
                    next(null, response, buffer);
                });
        },
        function uploadWebMax(response, buffer, next) {
            // Stream the transformed image to a different S3 bucket.
            console.log('Upload resized image');
            var dstKeyResized = "resized/" + srcKey1;
             const file = storage.bucket(dstBucket).file(dstKeyResized);
            file.save(buffer,  function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                } else {
                    console.log('uploaded to web-max Successfully !!');
                    next();
                }
            });
        },
        function download2(next) {
            // Download the image from S3 into a buffer.
            console.log('Download image', srcBucket, srcKey2);
            storage.bucket(srcBucket)
            .file(srcKey2)
            .download({}, next);
        },
        function transformWebMax(response, next) {
            console.log('Resize image', response);
            gm(response)
                .resize(WEB_WIDTH_MAX, WEB_HEIGHT_MAX, '^')
                .gravity('Center')
                .crop(WEB_WIDTH_MAX, WEB_HEIGHT_MAX)
                .toBuffer('jpeg', function (err, buffer) {
                    if (err) {
                        console.log(err, err.stack);
                        return err;
                    } 
                    next(null, response, buffer);
                });
        },
        function uploadWebMax(response, buffer, next) {
            // Stream the transformed image to a different S3 bucket.
            console.log('Upload resized image');
            var dstKeyResized = "resized/" + srcKey2;
             const file = storage.bucket(dstBucket).file(dstKeyResized);
            file.save(buffer,  function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                } else {
                    console.log('uploaded to web-max Successfully !!');
                    next();
                }
            });
        },
        function download3(next) {
            // Download the image from S3 into a buffer.
            console.log('Download image', srcBucket, srcKey3);
            storage.bucket(srcBucket)
            .file(srcKey3)
            .download({}, next);
        },
        function transformWebMax(response, next) {
            console.log('Resize image', response);
            gm(response)
                .resize(WEB_WIDTH_MAX, WEB_HEIGHT_MAX, '^')
                .gravity('Center')
                .crop(WEB_WIDTH_MAX, WEB_HEIGHT_MAX)
                .toBuffer('jpeg', function (err, buffer) {
                    if (err) {
                        console.log(err, err.stack);
                        return err;
                    } 
                    next(null, response, buffer);
                });
        },
        function uploadWebMax(response, buffer, next) {
            // Stream the transformed image to a different S3 bucket.
            console.log('Upload resized image');
            var dstKeyResized = "resized/" + srcKey3;
             const file = storage.bucket(dstBucket).file(dstKeyResized);
            file.save(buffer,  function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                } else {
                    console.log('uploaded to web-max Successfully !!');
                    next();
                }
            });
        },
        function download4(next) {
            // Download the image from S3 into a buffer.
            console.log('Download image', srcBucket, srcKey4);
            storage.bucket(srcBucket)
            .file(srcKey4)
            .download({}, next);
        },
        function transformWebMax(response, next) {
            console.log('Resize image', response);
            gm(response)
                .resize(WEB_WIDTH_MAX, WEB_HEIGHT_MAX, '^')
                .gravity('Center')
                .crop(WEB_WIDTH_MAX, WEB_HEIGHT_MAX)
                .toBuffer('jpeg', function (err, buffer) {
                    if (err) {
                        console.log(err, err.stack);
                        return err;
                    } 
                    next(null, response, buffer);
                });
        },
        function uploadWebMax(response, buffer, next) {
            // Stream the transformed image to a different S3 bucket.
            console.log('Upload resized image');
            var dstKeyResized = "resized/" + srcKey4;
             const file = storage.bucket(dstBucket).file(dstKeyResized);
            file.save(buffer,  function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                } else {
                    console.log('uploaded to web-max Successfully !!');
                    next(null, response, buffer);
                }
            });
        }
    ], function (err) {
        if (err) {
            console.log(
                'Unable to resize image', err
            );
        } else {
            console.log(
                'Successfully resized image'
            );
        }
        const endTime = performance.now();

        console.log('Execution time in seconds = ', (endTime - startTime )/ 1000);
        res.send('success');
    }
    );
});
