<?php

# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/location/locations.proto
namespace DeliciousBrains\WP_Offload_Media\Gcp\Google\Cloud\Location;

use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBType;
use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\RepeatedField;
use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBUtil;
/**
 * The response message for [Locations.ListLocations][google.cloud.location.Locations.ListLocations].
 *
 * Generated from protobuf message <code>google.cloud.location.ListLocationsResponse</code>
 */
class ListLocationsResponse extends \DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\Message
{
    /**
     * A list of locations that matches the specified filter in the request.
     *
     * Generated from protobuf field <code>repeated .google.cloud.location.Location locations = 1;</code>
     */
    private $locations;
    /**
     * The standard List next-page token.
     *
     * Generated from protobuf field <code>string next_page_token = 2;</code>
     */
    protected $next_page_token = '';
    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<\Google\Cloud\Location\Location>|\Google\Protobuf\Internal\RepeatedField $locations
     *           A list of locations that matches the specified filter in the request.
     *     @type string $next_page_token
     *           The standard List next-page token.
     * }
     */
    public function __construct($data = NULL)
    {
        \DeliciousBrains\WP_Offload_Media\Gcp\GPBMetadata\Google\Cloud\Location\Locations::initOnce();
        parent::__construct($data);
    }
    /**
     * A list of locations that matches the specified filter in the request.
     *
     * Generated from protobuf field <code>repeated .google.cloud.location.Location locations = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getLocations()
    {
        return $this->locations;
    }
    /**
     * A list of locations that matches the specified filter in the request.
     *
     * Generated from protobuf field <code>repeated .google.cloud.location.Location locations = 1;</code>
     * @param array<\Google\Cloud\Location\Location>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setLocations($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBType::MESSAGE, \DeliciousBrains\WP_Offload_Media\Gcp\Google\Cloud\Location\Location::class);
        $this->locations = $arr;
        return $this;
    }
    /**
     * The standard List next-page token.
     *
     * Generated from protobuf field <code>string next_page_token = 2;</code>
     * @return string
     */
    public function getNextPageToken()
    {
        return $this->next_page_token;
    }
    /**
     * The standard List next-page token.
     *
     * Generated from protobuf field <code>string next_page_token = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setNextPageToken($var)
    {
        GPBUtil::checkString($var, True);
        $this->next_page_token = $var;
        return $this;
    }
}
