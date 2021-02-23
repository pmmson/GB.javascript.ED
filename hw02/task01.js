"use strict";

// пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c);
// обьявляем переменные и двум присваиваем значение 1
// префиксный инкримент увеличивает а на 1 - получаем 2
// значение 2 присваиваем c и выводим в всплывающем сообщении

// пример 2
d = b++;
alert(d);
// d будет присвоенно значение b = 1
// потом сработает постфиксный инкримент, увеличив b на 1
// значение d = 1 будет выведено в всплывающем сообщении

// пример 3
c = 2 + ++a;
alert(c);
// a имеет значение 2, префиксный инкримент увеличит a до 3
// бинарный оператор + сложит два числа 2 и 3
// с будет присвоено значение 5 и выведено на экран

// пример 4
d = 2 + b++;
alert(d);
// b = 2, бинарный + сложит два числа, получим 4
// d будет присвоено значение 4, а b будет постфиксным инкриментом увеличен на 1 до 3
// выводим значение d на экран

alert(a);
// выводим значение a на экран = 3
alert(b);
// выводим значение b на экран = 3
