<?php

# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/protobuf/descriptor.proto
namespace DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal;

use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBType;
use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBWire;
use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\RepeatedField;
use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\InputStream;
use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBUtil;
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 *
 * Generated from protobuf message <code>google.protobuf.FileDescriptorSet</code>
 */
class FileDescriptorSet extends \DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .google.protobuf.FileDescriptorProto file = 1;</code>
     */
    private $file;
    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<\Google\Protobuf\Internal\FileDescriptorProto>|\Google\Protobuf\Internal\RepeatedField $file
     * }
     */
    public function __construct($data = NULL)
    {
        \DeliciousBrains\WP_Offload_Media\Gcp\GPBMetadata\Google\Protobuf\Internal\Descriptor::initOnce();
        parent::__construct($data);
    }
    /**
     * Generated from protobuf field <code>repeated .google.protobuf.FileDescriptorProto file = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getFile()
    {
        return $this->file;
    }
    /**
     * Generated from protobuf field <code>repeated .google.protobuf.FileDescriptorProto file = 1;</code>
     * @param array<\Google\Protobuf\Internal\FileDescriptorProto>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setFile($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBType::MESSAGE, \DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\FileDescriptorProto::class);
        $this->file = $arr;
        return $this;
    }
}
