module default {
    type Person {
        required property name -> str {
            default := ""
        };
        required property age -> int32;
    }
}