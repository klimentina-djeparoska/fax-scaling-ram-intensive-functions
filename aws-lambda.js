const {performance} = require('perf_hooks');

var async = require('async');
const AWS = require('aws-sdk');
const s3Client = new AWS.S3({
    region: 'eu-west-1'
})
var gm = require('gm')
            .subClass({ imageMagick: true }); // Enable ImageMagick integration.
// constants
var WEB_WIDTH_MAX  = 150;
var WEB_HEIGHT_MAX = 150;

exports.handler = function (event, context, callback) {
    // Read options from the event.
    const startTime = performance.now();
    console.log("Starting with processing images");
    var srcBucket = 'fax-images';
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
            s3Client.getObject({
                Bucket: srcBucket,
                Key: srcKey
            },
                next);
        },
        function transformWebMax(response, next) {
            console.log('Resize image', response);
            gm(response.Body)
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

            s3Client.putObject({
                Bucket: dstBucket,
                Key: dstKeyResized,
                Body: buffer,
                ContentType: response.ContentType
            }, function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                } else {
                    console.log('uploaded to web-max Successfully !!');
                    next();
                }
            });
        },
        function download(next) {
            // Download the image from S3 into a buffer.
            console.log('Download image', srcBucket, srcKey1);
            s3Client.getObject({
                Bucket: srcBucket,
                Key: srcKey1
            },
                next);
        },
        function transformWebMax(response, next) {
            console.log('Resize image', response);
            gm(response.Body)
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

            s3Client.putObject({
                Bucket: dstBucket,
                Key: dstKeyResized,
                Body: buffer,
                ContentType: response.ContentType
            }, function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                } else {
                    console.log('uploaded to web-max Successfully !!');
                    next();
                }
            });
        },
        function download(next) {
            // Download the image from S3 into a buffer.
            console.log('Download image', srcBucket, srcKey2);
            s3Client.getObject({
                Bucket: srcBucket,
                Key: srcKey2
            },
                next);
        },
        function transformWebMax(response, next) {
            console.log('Resize image', response);
            gm(response.Body)
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

            s3Client.putObject({
                Bucket: dstBucket,
                Key: dstKeyResized,
                Body: buffer,
                ContentType: response.ContentType
            }, function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                } else {
                    console.log('uploaded to web-max Successfully !!');
                    next();
                }
            });
        },
        function download(next) {
            // Download the image from S3 into a buffer.
            console.log('Download image', srcBucket, srcKey3);
            s3Client.getObject({
                Bucket: srcBucket,
                Key: srcKey3
            },
                next);
        },
        function transformWebMax(response, next) {
            console.log('Resize image', response);
            gm(response.Body)
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

            s3Client.putObject({
                Bucket: dstBucket,
                Key: dstKeyResized,
                Body: buffer,
                ContentType: response.ContentType
            }, function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                } else {
                    console.log('uploaded to web-max Successfully !!');
                    next();
                }
            });
        },
        function download(next) {
            // Download the image from S3 into a buffer.
            console.log('Download image', srcBucket, srcKey4);
            s3Client.getObject({
                Bucket: srcBucket,
                Key: srcKey4
            },
                next);
        },
        function transformWebMax(response, next) {
            console.log('Resize image', response);
            gm(response.Body)
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

            s3Client.putObject({
                Bucket: dstBucket,
                Key: dstKeyResized,
                Body: buffer,
                ContentType: response.ContentType
            }, function (err, data) {
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
        callback(null, "success");
    }
    );
};
