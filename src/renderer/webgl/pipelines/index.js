/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = require('./const');
var Extend = require('../utils/object/Extend');

/**
 * @namespace Phaser.Renderer.WebGL.Pipelines
 */

var Pipelines = {

    BitmapMaskPipeline: require('./BitmapMaskPipeline'),
    LightPipeline: require('./LightPipeline'),
    SinglePipeline: require('./SinglePipeline'),
    MultiPipeline: require('./MultiPipeline'),
    RopePipeline: require('./RopePipeline'),
    ModelViewProjection: require('./components/ModelViewProjection')

};

//   Merge in the consts

Pipelines = Extend(false, Pipelines, CONST);

//  Export it

module.exports = Pipelines;
