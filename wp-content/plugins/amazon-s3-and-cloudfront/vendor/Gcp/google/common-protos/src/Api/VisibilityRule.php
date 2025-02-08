<?php

# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/api/visibility.proto
namespace DeliciousBrains\WP_Offload_Media\Gcp\Google\Api;

use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBType;
use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\RepeatedField;
use DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\GPBUtil;
/**
 * A visibility rule provides visibility configuration for an individual API
 * element.
 *
 * Generated from protobuf message <code>google.api.VisibilityRule</code>
 */
class VisibilityRule extends \DeliciousBrains\WP_Offload_Media\Gcp\Google\Protobuf\Internal\Message
{
    /**
     * Selects methods, messages, fields, enums, etc. to which this rule applies.
     * Refer to [selector][google.api.DocumentationRule.selector] for syntax
     * details.
     *
     * Generated from protobuf field <code>string selector = 1;</code>
     */
    protected $selector = '';
    /**
     * A comma-separated list of visibility labels that apply to the `selector`.
     * Any of the listed labels can be used to grant the visibility.
     * If a rule has multiple labels, removing one of the labels but not all of
     * them can break clients.
     * Example:
     *     visibility:
     *       rules:
     *       - selector: google.calendar.Calendar.EnhancedSearch
     *         restriction: INTERNAL, PREVIEW
     * Removing INTERNAL from this restriction will break clients that rely on
     * this method and only had access to it through INTERNAL.
     *
     * Generated from protobuf field <code>string restriction = 2;</code>
     */
    protected $restriction = '';
    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $selector
     *           Selects methods, messages, fields, enums, etc. to which this rule applies.
     *           Refer to [selector][google.api.DocumentationRule.selector] for syntax
     *           details.
     *     @type string $restriction
     *           A comma-separated list of visibility labels that apply to the `selector`.
     *           Any of the listed labels can be used to grant the visibility.
     *           If a rule has multiple labels, removing one of the labels but not all of
     *           them can break clients.
     *           Example:
     *               visibility:
     *                 rules:
     *                 - selector: google.calendar.Calendar.EnhancedSearch
     *                   restriction: INTERNAL, PREVIEW
     *           Removing INTERNAL from this restriction will break clients that rely on
     *           this method and only had access to it through INTERNAL.
     * }
     */
    public function __construct($data = NULL)
    {
        \DeliciousBrains\WP_Offload_Media\Gcp\GPBMetadata\Google\Api\Visibility::initOnce();
        parent::__construct($data);
    }
    /**
     * Selects methods, messages, fields, enums, etc. to which this rule applies.
     * Refer to [selector][google.api.DocumentationRule.selector] for syntax
     * details.
     *
     * Generated from protobuf field <code>string selector = 1;</code>
     * @return string
     */
    public function getSelector()
    {
        return $this->selector;
    }
    /**
     * Selects methods, messages, fields, enums, etc. to which this rule applies.
     * Refer to [selector][google.api.DocumentationRule.selector] for syntax
     * details.
     *
     * Generated from protobuf field <code>string selector = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setSelector($var)
    {
        GPBUtil::checkString($var, True);
        $this->selector = $var;
        return $this;
    }
    /**
     * A comma-separated list of visibility labels that apply to the `selector`.
     * Any of the listed labels can be used to grant the visibility.
     * If a rule has multiple labels, removing one of the labels but not all of
     * them can break clients.
     * Example:
     *     visibility:
     *       rules:
     *       - selector: google.calendar.Calendar.EnhancedSearch
     *         restriction: INTERNAL, PREVIEW
     * Removing INTERNAL from this restriction will break clients that rely on
     * this method and only had access to it through INTERNAL.
     *
     * Generated from protobuf field <code>string restriction = 2;</code>
     * @return string
     */
    public function getRestriction()
    {
        return $this->restriction;
    }
    /**
     * A comma-separated list of visibility labels that apply to the `selector`.
     * Any of the listed labels can be used to grant the visibility.
     * If a rule has multiple labels, removing one of the labels but not all of
     * them can break clients.
     * Example:
     *     visibility:
     *       rules:
     *       - selector: google.calendar.Calendar.EnhancedSearch
     *         restriction: INTERNAL, PREVIEW
     * Removing INTERNAL from this restriction will break clients that rely on
     * this method and only had access to it through INTERNAL.
     *
     * Generated from protobuf field <code>string restriction = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setRestriction($var)
    {
        GPBUtil::checkString($var, True);
        $this->restriction = $var;
        return $this;
    }
}
