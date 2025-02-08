<?php

# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/api/field_info.proto
namespace DeliciousBrains\WP_Offload_Media\Gcp\Google\Api\FieldInfo;

use UnexpectedValueException;
/**
 * The standard format of a field value. The supported formats are all backed
 * by either an RFC defined by the IETF or a Google-defined AIP.
 *
 * Protobuf type <code>google.api.FieldInfo.Format</code>
 */
class Format
{
    /**
     * Default, unspecified value.
     *
     * Generated from protobuf enum <code>FORMAT_UNSPECIFIED = 0;</code>
     */
    const FORMAT_UNSPECIFIED = 0;
    /**
     * Universally Unique Identifier, version 4, value as defined by
     * https://datatracker.ietf.org/doc/html/rfc4122. The value may be
     * normalized to entirely lowercase letters. For example, the value
     * `F47AC10B-58CC-0372-8567-0E02B2C3D479` would be normalized to
     * `f47ac10b-58cc-0372-8567-0e02b2c3d479`.
     *
     * Generated from protobuf enum <code>UUID4 = 1;</code>
     */
    const UUID4 = 1;
    /**
     * Internet Protocol v4 value as defined by [RFC
     * 791](https://datatracker.ietf.org/doc/html/rfc791). The value may be
     * condensed, with leading zeros in each octet stripped. For example,
     * `001.022.233.040` would be condensed to `1.22.233.40`.
     *
     * Generated from protobuf enum <code>IPV4 = 2;</code>
     */
    const IPV4 = 2;
    /**
     * Internet Protocol v6 value as defined by [RFC
     * 2460](https://datatracker.ietf.org/doc/html/rfc2460). The value may be
     * normalized to entirely lowercase letters, and zero-padded partial and
     * empty octets. For example, the value `2001:DB8::` would be normalized to
     * `2001:0db8:0:0`.
     *
     * Generated from protobuf enum <code>IPV6 = 3;</code>
     */
    const IPV6 = 3;
    /**
     * An IP address in either v4 or v6 format as described by the individual
     * values defined herein. See the comments on the IPV4 and IPV6 types for
     * allowed normalizations of each.
     *
     * Generated from protobuf enum <code>IPV4_OR_IPV6 = 4;</code>
     */
    const IPV4_OR_IPV6 = 4;
    private static $valueToName = [self::FORMAT_UNSPECIFIED => 'FORMAT_UNSPECIFIED', self::UUID4 => 'UUID4', self::IPV4 => 'IPV4', self::IPV6 => 'IPV6', self::IPV4_OR_IPV6 => 'IPV4_OR_IPV6'];
    public static function name($value)
    {
        if (!isset(self::$valueToName[$value])) {
            throw new UnexpectedValueException(\sprintf('Enum %s has no name defined for value %s', __CLASS__, $value));
        }
        return self::$valueToName[$value];
    }
    public static function value($name)
    {
        $const = __CLASS__ . '::' . \strtoupper($name);
        if (!\defined($const)) {
            throw new UnexpectedValueException(\sprintf('Enum %s has no value defined for name %s', __CLASS__, $name));
        }
        return \constant($const);
    }
}
