export class Addend {
    constructor(id, sign = "+", value) {
        this.id = id;
        this.sign = sign;
        this.value = value;
        this.disabled = false;
    }

    setId(id) {
        this.id = id
    }

    setSign(sign) {
        this.sign = sign
    }

    setValue(value) {
        this.value = value
    }

    setDisabled(disabled) {
        this.disabled = disabled
    }

    enableOrDisable() {
        this.disabled = !this.disabled;
        console.log(this.disabled);
    }

}