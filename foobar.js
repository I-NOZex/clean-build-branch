function foo(){
    let a = 1+1;
    console.log('1 plus 1')
    return a;
}

function bar(){
    let b = 1*1;
    console.log('1 times 1')
    return b;
}

function foobar(){
    let c = foo() / bar();
    console.log('foo() / bar()')
    return c;
}


function dummy(){
    console.info('ei!')
    console.log('delegate to foobar()')
    console.error('beep')
    console.dir('this is redunctant')
    return foobar();
}