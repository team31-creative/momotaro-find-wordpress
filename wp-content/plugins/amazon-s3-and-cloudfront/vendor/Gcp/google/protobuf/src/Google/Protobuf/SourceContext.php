<?php

# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/protobuf/source_context.proto
namespace DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf;

use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBType;
use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\RepeatedField;
use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBUtil;
/**
 * `SourceContext` represents information about the source of a
 * protobuf element, like the file in which it is defined.
 *
 * Generated from protobuf message <code>google.protobuf.SourceContext</code>
 */
class SourceContext extends \DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\Message
{
    /**
     * The path-qualified name of the .proto file that contained the associated
     * protobuf element.  For example: `"google/protobuf/source_context.proto"`.
     *
     * Generated from protobuf field <code>string file_name = 1;</code>
     */
    protected $file_name = '';
    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $file_name
     *           The path-qualified name of the .proto file that contained the associated
     *           protobuf element.  For example: `"google/protobuf/source_context.proto"`.
     * }
     */
    public function __construct($data = NULL)
    {
        \DeliciousBrains\WP_Offload_Media\Gcp\GPBMetadata\Google\Protobuf\SourceContext::initOnce();
        parent::__construct($data);
    }
    /**
     * The path-qualified name of the .proto file that contained the associated
     * protobuf element.  For example: `"google/protobuf/source_context.proto"`.
     *
     * Generated from protobuf field <code>string file_name = 1;</code>
     * @return string
     */
    public function getFileName()
    {
        return $this->file_name;
    }
    /**
     * The path-qualified name of the .proto file that contained the associated
     * protobuf element.  For example: `"google/protobuf/source_context.proto"`.
     *
     * Generated from protobuf field <code>string file_name = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setFileName($var)
    {
        GPBUtil::checkString($var, True);
        $this->file_name = $var;
        return $this;
    }
}
