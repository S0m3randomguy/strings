
namespace strings {
    export const digits = "0123456789";
    export const lowercase = "abcdefghijklmnopqrstuvwxyz";
    export const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    export const special = "!\"#$%&'()*+,-./:;<=>?@[\]^_{|}~`";
    export const whitespace = " \t";
    export const letters = lowercase + uppercase;
    export const alphanumeric = letters + digits;
    export const ascii = alphanumeric + special;
}