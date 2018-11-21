module.exports = (sequalize,type) => {
    return sequalize.define('role',{
        roleName: type.STRING
    });
}