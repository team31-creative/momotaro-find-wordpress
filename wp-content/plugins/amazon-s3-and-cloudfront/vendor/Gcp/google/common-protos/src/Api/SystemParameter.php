<?php

# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/api/system_parameter.proto
namespace DeliciousBrains\WP_Offload_Media\Gcp\Google\Api;

use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBType;
use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\RepeatedField;
use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBUtil;
/**
 * Define a parameter's name and location. The parameter may be passed as either
 * an HTTP header or a URL query parameter, and if both are passed the behavior
 * is implementation-dependent.
 *
 * Generated from protobuf message <code>google.api.SystemParameter</code>
 */
class SystemParameter extends \DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\Message
{
    /**
     * Define the name of the parameter, such as "api_key" . It is case sensitive.
     *
     * Generated from protobuf field <code>string name = 1;</code>
     */
    protected $name = '';
    /**
     * Define the HTTP header name to use for the parameter. It is case
     * insensitive.
     *
     * Generated from protobuf field <code>string http_header = 2;</code>
     */
    protected $http_header = '';
    /**
     * Define the URL query parameter name to use for the parameter. It is case
     * sensitive.
     *
     * Generated from protobuf field <code>string url_query_parameter = 3;</code>
     */
    protected $url_query_parameter = '';
    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $name
     *           Define the name of the parameter, such as "api_key" . It is case sensitive.
     *     @type string $http_header
     *           Define the HTTP header name to use for the parameter. It is case
     *           insensitive.
     *     @type string $url_query_parameter
     *           Define the URL query parameter name to use for the parameter. It is case
     *           sensitive.
     * }
     */
    public function __construct($data = NULL)
    {
        \DeliciousBrains\WP_Offload_Media\Gcp\GPBMetadata\Google\Api\SystemParameter::initOnce();
        parent::__construct($data);
    }
    /**
     * Define the name of the parameter, such as "api_key" . It is case sensitive.
     *
     * Generated from protobuf field <code>string name = 1;</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }
    /**
     * Define the name of the parameter, such as "api_key" . It is case sensitive.
     *
     * Generated from protobuf field <code>string name = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setName($var)
    {
        GPBUtil::checkString($var, True);
        $this->name = $var;
        return $this;
    }
    /**
     * Define the HTTP header name to use for the parameter. It is case
     * insensitive.
     *
     * Generated from protobuf field <code>string http_header = 2;</code>
     * @return string
     */
    public function getHttpHeader()
    {
        return $this->http_header;
    }
    /**
     * Define the HTTP header name to use for the parameter. It is case
     * insensitive.
     *
     * Generated from protobuf field <code>string http_header = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setHttpHeader($var)
    {
        GPBUtil::checkString($var, True);
        $this->http_header = $var;
        return $this;
    }
    /**
     * Define the URL query parameter name to use for the parameter. It is case
     * sensitive.
     *
     * Generated from protobuf field <code>string url_query_parameter = 3;</code>
     * @return string
     */
    public function getUrlQueryParameter()
    {
        return $this->url_query_parameter;
    }
    /**
     * Define the URL query parameter name to use for the parameter. It is case
     * sensitive.
     *
     * Generated from protobuf field <code>string url_query_parameter = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setUrlQueryParameter($var)
    {
        GPBUtil::checkString($var, True);
        $this->url_query_parameter = $var;
        return $this;
    }
}
