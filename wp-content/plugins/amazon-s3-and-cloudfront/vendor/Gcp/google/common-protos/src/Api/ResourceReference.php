<?php

# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/api/resource.proto
namespace DeliciousBrains\WP_Offload_Media\Gcp\Google\Api;

use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBType;
use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\RepeatedField;
use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBUtil;
/**
 * Defines a proto annotation that describes a string field that refers to
 * an API resource.
 *
 * Generated from protobuf message <code>google.api.ResourceReference</code>
 */
class ResourceReference extends \DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\Message
{
    /**
     * The resource type that the annotated field references.
     * Example:
     *     message Subscription {
     *       string topic = 2 [(google.api.resource_reference) = {
     *         type: "pubsub.googleapis.com/Topic"
     *       }];
     *     }
     * Occasionally, a field may reference an arbitrary resource. In this case,
     * APIs use the special value * in their resource reference.
     * Example:
     *     message GetIamPolicyRequest {
     *       string resource = 2 [(google.api.resource_reference) = {
     *         type: "*"
     *       }];
     *     }
     *
     * Generated from protobuf field <code>string type = 1;</code>
     */
    protected $type = '';
    /**
     * The resource type of a child collection that the annotated field
     * references. This is useful for annotating the `parent` field that
     * doesn't have a fixed resource type.
     * Example:
     *     message ListLogEntriesRequest {
     *       string parent = 1 [(google.api.resource_reference) = {
     *         child_type: "logging.googleapis.com/LogEntry"
     *       };
     *     }
     *
     * Generated from protobuf field <code>string child_type = 2;</code>
     */
    protected $child_type = '';
    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $type
     *           The resource type that the annotated field references.
     *           Example:
     *               message Subscription {
     *                 string topic = 2 [(google.api.resource_reference) = {
     *                   type: "pubsub.googleapis.com/Topic"
     *                 }];
     *               }
     *           Occasionally, a field may reference an arbitrary resource. In this case,
     *           APIs use the special value * in their resource reference.
     *           Example:
     *               message GetIamPolicyRequest {
     *                 string resource = 2 [(google.api.resource_reference) = {
     *                   type: "*"
     *                 }];
     *               }
     *     @type string $child_type
     *           The resource type of a child collection that the annotated field
     *           references. This is useful for annotating the `parent` field that
     *           doesn't have a fixed resource type.
     *           Example:
     *               message ListLogEntriesRequest {
     *                 string parent = 1 [(google.api.resource_reference) = {
     *                   child_type: "logging.googleapis.com/LogEntry"
     *                 };
     *               }
     * }
     */
    public function __construct($data = NULL)
    {
        \DeliciousBrains\WP_Offload_Media\Gcp\GPBMetadata\Google\Api\Resource::initOnce();
        parent::__construct($data);
    }
    /**
     * The resource type that the annotated field references.
     * Example:
     *     message Subscription {
     *       string topic = 2 [(google.api.resource_reference) = {
     *         type: "pubsub.googleapis.com/Topic"
     *       }];
     *     }
     * Occasionally, a field may reference an arbitrary resource. In this case,
     * APIs use the special value * in their resource reference.
     * Example:
     *     message GetIamPolicyRequest {
     *       string resource = 2 [(google.api.resource_reference) = {
     *         type: "*"
     *       }];
     *     }
     *
     * Generated from protobuf field <code>string type = 1;</code>
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }
    /**
     * The resource type that the annotated field references.
     * Example:
     *     message Subscription {
     *       string topic = 2 [(google.api.resource_reference) = {
     *         type: "pubsub.googleapis.com/Topic"
     *       }];
     *     }
     * Occasionally, a field may reference an arbitrary resource. In this case,
     * APIs use the special value * in their resource reference.
     * Example:
     *     message GetIamPolicyRequest {
     *       string resource = 2 [(google.api.resource_reference) = {
     *         type: "*"
     *       }];
     *     }
     *
     * Generated from protobuf field <code>string type = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setType($var)
    {
        GPBUtil::checkString($var, True);
        $this->type = $var;
        return $this;
    }
    /**
     * The resource type of a child collection that the annotated field
     * references. This is useful for annotating the `parent` field that
     * doesn't have a fixed resource type.
     * Example:
     *     message ListLogEntriesRequest {
     *       string parent = 1 [(google.api.resource_reference) = {
     *         child_type: "logging.googleapis.com/LogEntry"
     *       };
     *     }
     *
     * Generated from protobuf field <code>string child_type = 2;</code>
     * @return string
     */
    public function getChildType()
    {
        return $this->child_type;
    }
    /**
     * The resource type of a child collection that the annotated field
     * references. This is useful for annotating the `parent` field that
     * doesn't have a fixed resource type.
     * Example:
     *     message ListLogEntriesRequest {
     *       string parent = 1 [(google.api.resource_reference) = {
     *         child_type: "logging.googleapis.com/LogEntry"
     *       };
     *     }
     *
     * Generated from protobuf field <code>string child_type = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setChildType($var)
    {
        GPBUtil::checkString($var, True);
        $this->child_type = $var;
        return $this;
    }
}
