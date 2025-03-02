<?php

# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/iam/v1/iam_policy.proto
namespace DeliciousBrains\WP_Offload_Media\Gcp\GPBMetadata\Google\Iam\V1;

class IamPolicy
{
    public static $is_initialized = \false;
    public static function initOnce()
    {
        $pool = \DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();
        if (static::$is_initialized == \true) {
            return;
        }
        \DeliciousBrains\WP_Offload_Media\Gcp\GPBMetadata\Google\Api\Annotations::initOnce();
        \DeliciousBrains\WP_Offload_Media\Gcp\GPBMetadata\Google\Api\Client::initOnce();
        \DeliciousBrains\WP_Offload_Media\Gcp\GPBMetadata\Google\Api\FieldBehavior::initOnce();
        \DeliciousBrains\WP_Offload_Media\Gcp\GPBMetadata\Google\Api\Resource::initOnce();
        \DeliciousBrains\WP_Offload_Media\Gcp\GPBMetadata\Google\Iam\V1\Options::initOnce();
        \DeliciousBrains\WP_Offload_Media\Gcp\GPBMetadata\Google\Iam\V1\Policy::initOnce();
        \DeliciousBrains\WP_Offload_Media\Gcp\GPBMetadata\Google\Protobuf\FieldMask::initOnce();
        $pool->internalAddGeneratedFile('
�	
google/iam/v1/iam_policy.protogoogle.iam.v1google/api/client.protogoogle/api/field_behavior.protogoogle/api/resource.protogoogle/iam/v1/options.protogoogle/iam/v1/policy.proto google/protobuf/field_mask.proto"�
SetIamPolicyRequest
resource (	B	�A�A
**
policy (2.google.iam.v1.PolicyB�A/
update_mask (2.google.protobuf.FieldMask"d
GetIamPolicyRequest
resource (	B	�A�A
*0
options (2.google.iam.v1.GetPolicyOptions"R
TestIamPermissionsRequest
resource (	B	�A�A
*
permissions (	B�A"1
TestIamPermissionsResponse
permissions (	2�
	IAMPolicyt
SetIamPolicy".google.iam.v1.SetIamPolicyRequest.google.iam.v1.Policy")���#"/v1/{resource=**}:setIamPolicy:*t
GetIamPolicy".google.iam.v1.GetIamPolicyRequest.google.iam.v1.Policy")���#"/v1/{resource=**}:getIamPolicy:*�
TestIamPermissions(.google.iam.v1.TestIamPermissionsRequest).google.iam.v1.TestIamPermissionsResponse"/���)"$/v1/{resource=**}:testIamPermissions:*�Aiam-meta-api.googleapis.comB
com.google.iam.v1BIamPolicyProtoPZ)cloud.google.com/go/iam/apiv1/iampb;iampb��Google.Cloud.Iam.V1�Google\\Cloud\\Iam\\V1bproto3', \true);
        static::$is_initialized = \true;
    }
}
