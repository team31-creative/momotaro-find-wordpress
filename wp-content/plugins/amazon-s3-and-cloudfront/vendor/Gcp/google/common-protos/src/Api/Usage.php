<?php

# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/api/usage.proto
namespace DeliciousBrains\WP_Offload_Media\Gcp\Google\Api;

use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBType;
use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\RepeatedField;
use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBUtil;
/**
 * Configuration controlling usage of a service.
 *
 * Generated from protobuf message <code>google.api.Usage</code>
 */
class Usage extends \DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\Message
{
    /**
     * Requirements that must be satisfied before a consumer project can use the
     * service. Each requirement is of the form <service.name>/<requirement-id>;
     * for example 'serviceusage.googleapis.com/billing-enabled'.
     * For Google APIs, a Terms of Service requirement must be included here.
     * Google Cloud APIs must include "serviceusage.googleapis.com/tos/cloud".
     * Other Google APIs should include
     * "serviceusage.googleapis.com/tos/universal". Additional ToS can be
     * included based on the business needs.
     *
     * Generated from protobuf field <code>repeated string requirements = 1;</code>
     */
    private $requirements;
    /**
     * A list of usage rules that apply to individual API methods.
     * **NOTE:** All service configuration rules follow "last one wins" order.
     *
     * Generated from protobuf field <code>repeated .google.api.UsageRule rules = 6;</code>
     */
    private $rules;
    /**
     * The full resource name of a channel used for sending notifications to the
     * service producer.
     * Google Service Management currently only supports
     * [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification
     * channel. To use Google Cloud Pub/Sub as the channel, this must be the name
     * of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format
     * documented in https://cloud.google.com/pubsub/docs/overview.
     *
     * Generated from protobuf field <code>string producer_notification_channel = 7;</code>
     */
    protected $producer_notification_channel = '';
    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $requirements
     *           Requirements that must be satisfied before a consumer project can use the
     *           service. Each requirement is of the form <service.name>/<requirement-id>;
     *           for example 'serviceusage.googleapis.com/billing-enabled'.
     *           For Google APIs, a Terms of Service requirement must be included here.
     *           Google Cloud APIs must include "serviceusage.googleapis.com/tos/cloud".
     *           Other Google APIs should include
     *           "serviceusage.googleapis.com/tos/universal". Additional ToS can be
     *           included based on the business needs.
     *     @type array<\Google\Api\UsageRule>|\Google\Protobuf\Internal\RepeatedField $rules
     *           A list of usage rules that apply to individual API methods.
     *           **NOTE:** All service configuration rules follow "last one wins" order.
     *     @type string $producer_notification_channel
     *           The full resource name of a channel used for sending notifications to the
     *           service producer.
     *           Google Service Management currently only supports
     *           [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification
     *           channel. To use Google Cloud Pub/Sub as the channel, this must be the name
     *           of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format
     *           documented in https://cloud.google.com/pubsub/docs/overview.
     * }
     */
    public function __construct($data = NULL)
    {
        \DeliciousBrains\WP_Offload_Media\Gcp\GPBMetadata\Google\Api\Usage::initOnce();
        parent::__construct($data);
    }
    /**
     * Requirements that must be satisfied before a consumer project can use the
     * service. Each requirement is of the form <service.name>/<requirement-id>;
     * for example 'serviceusage.googleapis.com/billing-enabled'.
     * For Google APIs, a Terms of Service requirement must be included here.
     * Google Cloud APIs must include "serviceusage.googleapis.com/tos/cloud".
     * Other Google APIs should include
     * "serviceusage.googleapis.com/tos/universal". Additional ToS can be
     * included based on the business needs.
     *
     * Generated from protobuf field <code>repeated string requirements = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getRequirements()
    {
        return $this->requirements;
    }
    /**
     * Requirements that must be satisfied before a consumer project can use the
     * service. Each requirement is of the form <service.name>/<requirement-id>;
     * for example 'serviceusage.googleapis.com/billing-enabled'.
     * For Google APIs, a Terms of Service requirement must be included here.
     * Google Cloud APIs must include "serviceusage.googleapis.com/tos/cloud".
     * Other Google APIs should include
     * "serviceusage.googleapis.com/tos/universal". Additional ToS can be
     * included based on the business needs.
     *
     * Generated from protobuf field <code>repeated string requirements = 1;</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setRequirements($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBType::STRING);
        $this->requirements = $arr;
        return $this;
    }
    /**
     * A list of usage rules that apply to individual API methods.
     * **NOTE:** All service configuration rules follow "last one wins" order.
     *
     * Generated from protobuf field <code>repeated .google.api.UsageRule rules = 6;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getRules()
    {
        return $this->rules;
    }
    /**
     * A list of usage rules that apply to individual API methods.
     * **NOTE:** All service configuration rules follow "last one wins" order.
     *
     * Generated from protobuf field <code>repeated .google.api.UsageRule rules = 6;</code>
     * @param array<\Google\Api\UsageRule>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setRules($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBType::MESSAGE, \DeliciousBrains\WP_Offload_Media\Gcp\Google\Api\UsageRule::class);
        $this->rules = $arr;
        return $this;
    }
    /**
     * The full resource name of a channel used for sending notifications to the
     * service producer.
     * Google Service Management currently only supports
     * [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification
     * channel. To use Google Cloud Pub/Sub as the channel, this must be the name
     * of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format
     * documented in https://cloud.google.com/pubsub/docs/overview.
     *
     * Generated from protobuf field <code>string producer_notification_channel = 7;</code>
     * @return string
     */
    public function getProducerNotificationChannel()
    {
        return $this->producer_notification_channel;
    }
    /**
     * The full resource name of a channel used for sending notifications to the
     * service producer.
     * Google Service Management currently only supports
     * [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification
     * channel. To use Google Cloud Pub/Sub as the channel, this must be the name
     * of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format
     * documented in https://cloud.google.com/pubsub/docs/overview.
     *
     * Generated from protobuf field <code>string producer_notification_channel = 7;</code>
     * @param string $var
     * @return $this
     */
    public function setProducerNotificationChannel($var)
    {
        GPBUtil::checkString($var, True);
        $this->producer_notification_channel = $var;
        return $this;
    }
}
