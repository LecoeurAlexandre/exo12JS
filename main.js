let pop = 96809;
let an = 0;
let message;

while (pop < 120000) {
    pop = pop * (1+0.0089)
    an = an+1
}

pop = Math.round(pop);

message = `La ville de Tourcoing dépassera une population de 120 000 habitants dans ${an} années (${pop} habitants)`;

alert(message);