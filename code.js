let input = require("readline-sync");
console.log("<=====>khushbu's Dhaba<=====>");
console.log("1.Monday \n2.Tuesday \n3.Wednesday \n4.Thursday \n5.Friday \n6.Saturday \n7.Sunday");
let day = (input.question('Enter Day :-'));
if (day == 1) {
    console.log('1.Breackfast \n2.Lunch \n3.Dinner');
    let time = (input.question('Enter your time :-'));
    if (time == 1) {
        console.log('1.Upma \n2.Chapati');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Upma");
            console.log("1.Half plate:- 20$ \n2. Full plate:-40$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plate:-20$');
                let pay = (input.questionInt("Enter your pay:-"));
                if (pay == 20) {
                    console.log("Thank you");
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("return extra money:-" + extra);
                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"));
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (pay_again > less) {
                        console.log("thanks" + extra);
                    } else if (pay_again < less) {
                        let extra = less - pay_again;
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plate:-40$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 40) {
                    console.log("Thank you");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money:-" + extra);
                } else {
                    let less = 40 - pay;
                    console.log("give me more money:-" + less)
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (pay_again > less) {
                        console.log("thanks" + extra);
                    } else if (pay_again < less) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }

        } else if (dish == 2) {
            console.log("Chapati");
            console.log("1.Half plate:- 30$ \n 2. Full plate:-60$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plate:-30$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 30) {
                    console.log("Thank you");
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plate:-60$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 60) {
                    console.log("Thank you");
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }

        }
    } else if (time == 2) {
        console.log('1.Rice and curry \n2.Chapati and Sabzi');
        let dise = (input.question("Enter your dise :- "));
        if (dise == 1) {
            console.log("Rice and curry");
            console.log("1.Half plate:- 50$ \n 2. Full plate:-100$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-50$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("Thank you");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                } else if (plate == 2) {
                    console.log("2.Full plete:-100$");
                    console.log("2.Full plate:-40$");
                    let pay = (input.questionInt("Enter your pay:- "));
                    if (pay == 100) {
                        console.log("Thank you");
                    } else if (pay > 100) {
                        let extra = pay - 100;
                        console.log("keep your extra money:-" + extra);
                    } else if (pay < 100) {
                        let less = 100 - pay;
                        console.log("give me more money:-" + less);
                        let pay_again = (input.questionInt("Enter your pay_again:-"))
                        if (pay_again == less) {
                            console.log("thank you");
                        } else if (less < pay_again) {
                            console.log("thanks" + extra);
                        } else if (less > pay_again) {
                            let extra = less - pay_again
                            let Return = pay + pay_again;
                            console.log("your order has canceled");
                            console.log("keep your money:-" + Return)
                        }
                    }
                }
            }
        } else if (dise == 2) {
            console.log("Chapati and Sabzi");
            console.log("1.Half plate:- 30$ \n2.Full plate:-60$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-30$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 30) {
                    console.log("Thank you");
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-60$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 60) {
                    console.log("Thank you");
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled:-");
                        console.log("keep you money" + Return)
                    }
                }
            }

        }
    } else if (time == 3) {
        console.log('1.Dal Makhani \n2.Aloo Gobi');
        let dise = (input.question("Enter your dise :- "));
        if (dise == 1) {
            console.log("Dal Makhani");
            console.log("1.Half plate:- 40$ \n 2. Full plate:-80$");
            let plate = (input.question("Enter your input:- "));
            if (plate == 1) {
                console.log('1.Half plete:-40$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 40) {
                    console.log("Thank you");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-80$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 80) {
                    console.log("Thank you");
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }

        } else if (dise == 2) {
            console.log("Aloo Gobi");
            console.log("1.Half plate:- 50$ \n 2.Full plate:-100$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-50$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("Thank you");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-100$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 100) {
                    console.log("Thank you");
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }

        }
    }
}
if (day == 2) {
    console.log('1.Breackfast \n2.Lunch \n3.Dinner');
    let time = (input.question('Enter your time :-'));
    if (time == 1) {
        console.log('1.poha \n2.idli-sambar');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("poha");
            console.log("1.Half plate:- 20$ \n2. Full plate:-40$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plate:-20$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 20) {
                    console.log("Thank you");
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled:-" + Return);
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plate:-40$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 40) {
                    console.log("Thank you");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money:-" + extra);
                } else {
                    let less = 40 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        } else if (dish == 2) {
            console.log("idli-samber");
            console.log("1.Half plate:- 30$ \n2. Full plate:-60$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plate:-30$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 30) {
                    console.log("Thank you");
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plate:-60$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 60) {
                    console.log("Thank you");
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        }
    } else if (time == 2) {
        console.log('1.dal chawal \n2.chole bhature');
        let dise = (input.question("Enter your dise :- "));
        if (dise == 1) {
            console.log("dal chawal");
            console.log("1.Half plate:- 50$ \n 2. Full plate:-100$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-50$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("Thank you");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-100$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 100) {
                    console.log("Thank you");
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        } else if (dise == 2) {
            console.log("chole bhature");
            console.log("1.Half plate:- 30$ \n2.Full plate:-60$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-30$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 30) {
                    console.log("Thank you");
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-60$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 60) {
                    console.log("Thank you");
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        }
    } else if (time == 3) {
        console.log('1.paneer tikka \n2.dosa with chutney');
        let dise = (input.question("Enter your dise :- "));
        if (dise == 1) {
            console.log("paneer tikka");
            console.log("1.Half plate:- 40$ \n 2. Full plate:-80$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-40$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 40) {
                    console.log("Thank you");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-80$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 80) {
                    console.log("Thank you");
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        } else if (dise == 2) {
            console.log("dosa with chatney");
            console.log("1.Half plate:- 50$ \n 2.Full plate:-100$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-50$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("Thank you");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-100$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 100) {
                    console.log("Thank you");
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        }
    }
}
if (day == 3) {
    console.log('1.Breackfast \n2.Lunch \n3.Dinner');
    let time = (input.question('Enter your time :-'));
    if (time == 1) {
        console.log('1.Paratha \n2.Pancakes');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Paratha");
            console.log("1.Half plate:- 25$ \n2. Full plate:-50$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plate:-25$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 25) {
                    console.log("Thank you");
                } else if (pay > 25) {
                    let extra = pay - 25;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 25) {
                    let less = 25 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plate:-50$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("Thank you");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Pancakes");
            console.log("1.Half plate:- 15$ \n 2. Full plate:-30$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plate:-15$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 15) {
                    console.log("Thank you");
                } else if (pay > 15) {
                    let extra = pay - 15;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 15) {
                    let less = 15 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plate:-30$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 30) {
                    console.log("Thank you");
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        }
    } else if (time == 2) {
        console.log('1.Khichdi \n2.Rajma Chawal');
        let dise = (input.question("Enter your dise :- "));
        if (dise == 1) {
            console.log("Khichdi");
            console.log("1.Half plate:- 35$ \n 2. Full plate:-70$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-35$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 35) {
                    console.log("Thank you");
                } else if (pay > 35) {
                    let extra = pay - 35;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 35) {
                    let less = 35 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-70$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 70) {
                    console.log("Thank you");
                } else if (pay > 70) {
                    let extra = pay - 70;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 70) {
                    let less = 70 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        } else if (dise == 2) {
            console.log("Rajma Chawal");
            console.log("1.Half plate:- 25$ \n2.Full plate:-50$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-25$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 25) {
                    console.log("Thank you");
                } else if (pay > 25) {
                    let extra = pay - 25;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 25) {
                    let less = 25 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-50$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("Thank you");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled:-" + Return);
                    }
                }
            }
        }
    } else if (time == 3) {
        console.log('1.Palak Paneer \n2.Butter Chicken');
        let dise = (input.question("Enter your dise :- "));
        if (dise == 1) {
            console.log("Palak Paneer");
            console.log("1.Half plate:- 45$ \n 2. Full plate:-90$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-45$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 45) {
                    console.log("Thank you");
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-90$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 90) {
                    console.log("Thank you");
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        } else if (dise == 2) {
            console.log("Butter Chicken");
            console.log("1.Half plate:- 50$ \n 2.Full plate:-100$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-50$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("Thank you");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-100$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 100) {
                    console.log("Thank you");
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        }
    }
}
if (day == 4) {
    console.log('1.Breakfast \n2.Lunch \n3.Dinner');
    let time = (input.question('Enter your time :-'));
    if (time == 1) {
        console.log('1.Dosa \n2.Porridge');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Dosa");
            console.log("1.Half plate:- 20$ \n2. Full plate:-40$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plate:-20$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 20) {
                    console.log("Thank you");
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plate:-40$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 40) {
                    console.log("Thank you");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Porridge");
            console.log("1.Half plate:- 15$ \n 2. Full plate:-30$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plate:-15$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 15) {
                    console.log("Thank you");
                } else if (pay > 15) {
                    let extra = pay - 15;
                    console.log("keep your extra money" + extra);
                } else if (pay < 15) {
                    let less = 15 - pay;
                    console.log("give me more money" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plate:-30$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 30) {
                    console.log("Thank you");
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        }
    } else if (time == 2) {
        console.log('1.Pulao \n2.Dal and rich');
        let dise = (input.question("Enter your dise :- "));
        if (dise == 1) {
            console.log("Pulao");
            console.log("1.Half plate:- 20$ \n 2. Full plate:-40$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-20$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 20) {
                    console.log("Thank you");
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-40$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 40) {
                    console.log("Thank you");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        } else if (dise == 2) {
            console.log("Dal and Rice");
            console.log("1.Half plate:- 30$ \n2.Full plate:-60$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-30$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 30) {
                    console.log("Thank you");
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-60$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 60) {
                    console.log("Thank you");
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        }
    } else if (time == 3) {
        console.log('1.Dal Makhani \n2.Aloo Gobi');
        let dise = (input.question("Enter your dise :- "));
        if (dise == 1) {
            console.log("Dal Makhani");
            console.log("1.Half plate:- 40$ \n 2. Full plate:-80$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-40$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 40) {
                    console.log("Thank you");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-80$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 80) {
                    console.log("Thank you");
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        } else if (dise == 2) {
            console.log("Aloo Gobi");
            console.log("1.Half plate:- 50$ \n 2.Full plate:-100$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-50$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("Thank you");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-100$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 100) {
                    console.log("Thank you");
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        }
    }
}
if (day == 5) {
    console.log('1.Breackfast \n2.Lunch \n3.Dinner');
    let time = (input.question('Enter your time :-'));
    if (time == 1) {
        console.log('1.Upma \n2.Chapati');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Upma");
            console.log("1.Half plate:- 20$ \n2. Full plate:-40$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plate:-20$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 20) {
                    console.log("Thank you");
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plate:-40$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 40) {
                    console.log("Thank you");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Chapati");
            console.log("1.Half plate:- 30$ \n 2. Full plate:-60$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plate:-30$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 30) {
                    console.log("Thank you");
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plate:-60$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 60) {
                    console.log("Thank you");
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        }
    } else if (time == 2) {
        console.log('1.Rice and curry \n2.Chapati and Sabzi');
        let dise = (input.question("Enter your dise :- "));
        if (dise == 1) {
            console.log("Rice and curry");
            console.log("1.Half plate:- 50$ \n 2. Full plate:-100$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-50$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("Thank you");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                } else if (plate == 2) {
                    console.log("2.Full plete:-100$");
                    console.log("2.Full plate:-40$");
                    let pay = (input.questionInt("Enter your pay:- "));
                    if (pay == 100) {
                        console.log("Thank you");
                    } else if (pay > 100) {
                        let extra = pay - 100;
                        console.log("keep your extra money:-" + extra);
                    } else if (pay < 100) {
                        let less = 100 - pay;
                        console.log("give me more money:-" + less);
                        let pay_again = (input.questionInt("Enter your pay_again:-"))
                        if (pay_again == less) {
                            console.log("thank you");
                        } else if (less < pay_again) {
                            console.log("thanks" + extra);
                        } else if (less > pay_again) {
                            let extra = less - pay_again
                            let Return = pay + pay_again;
                            console.log("your order has canceled");
                            console.log("keep your money:-" + Return)
                        }
                    }
                }
            }
        } else if (dise == 2) {
            console.log("Chapati and Sabzi");
            console.log("1.Half plate:- 30$ \n2.Full plate:-60$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-30$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 30) {
                    console.log("Thank you");
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-60$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 60) {
                    console.log("Thank you");
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled:-");
                        console.log("keep you money" + Return)
                    }
                }
            }
        }
    } else if (time == 3) {
        console.log('1.Dal Makhani \n2.Aloo Gobi');
        let dise = (input.question("Enter your dise :- "));
        if (dise == 1) {
            console.log("Dal Makhani");
            console.log("1.Half plate:- 40$ \n 2. Full plate:-80$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-40$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 40) {
                    console.log("Thank you");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-80$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 80) {
                    console.log("Thank you");
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        } else if (dise == 2) {
            console.log("Aloo Gobi");
            console.log("1.Half plate:- 50$ \n 2.Full plate:-100$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-50$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("Thank you");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-100$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 100) {
                    console.log("Thank you");
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        }
    }
}
if (day == 6) {
    console.log('1.Breackfast \n2.Lunch \n3.Dinner');
    let time = (input.question('Enter your time :-'));
    if (time == 1) {
        console.log('1.Upma \n2.Chapati');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Upma");
            console.log("1.Half plate:- 20$ \n2. Full plate:-40$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plate:-20$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 20) {
                    console.log("Thank you");
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plate:-40$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 40) {
                    console.log("Thank you");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Chapati");
            console.log("1.Half plate:- 30$ \n 2. Full plate:-60$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plate:-30$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 30) {
                    console.log("Thank you");
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plate:-60$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 60) {
                    console.log("Thank you");
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        }
    } else if (time == 2) {
        console.log('1.Rice and curry \n2.Chapati and Sabzi');
        let dise = (input.question("Enter your dise :- "));
        if (dise == 1) {
            console.log("Rice and curry");
            console.log("1.Half plate:- 50$ \n2.Full plate:-100$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-50$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("Thank you");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-100$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 100) {
                    console.log("Thank you");
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        } else if (dise == 2) {
            console.log("Chapati and Sabzi");
            console.log("1.Half plate:- 30$ \n2.Full plate:-60$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-30$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 30) {
                    console.log("Thank you");
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-60$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 60) {
                    console.log("Thank you");
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        }
    } else if (time == 3) {
        console.log('1.Dal Makhani \n2.Aloo Gobi');
        let dise = (input.question("Enter your dise :- "));
        if (dise == 1) {
            console.log("Dal Makhani");
            console.log("1.Half plate:- 40$ \n 2. Full plate:-80$");
            let plate = (input.question('Enter your price:-'));
            if (plate == 1) {
                console.log('1.Half plete:-40$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 40) {
                    console.log("Thank you");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plale == 2) {
                console.log("2.Full plete:-80$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 80) {
                    console.log("Thank you");
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        } else if (dise == 2) {
            console.log("Aloo Gobi");
            console.log("1.Half plate:- 50$ \n 2.Full plate:-100$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-50$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("Thank you");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-100$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 100) {
                    console.log("Thank you");
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        }
    }
}
if (day == 7) {
    console.log('1.Breackfast \n2.Lunch \n3.Dinner');
    let time = (input.question('Enter your time :-'));
    if (time == 1) {
        console.log('1.Upma \n2.Chapati');
        let dish = (input.question("Enter your dise :- "));
        if (dish == 1) {
            console.log("Upma");
            console.log("1.Half plate:- 20$ \n2. Full plate:-40$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plate:-20$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 20) {
                    console.log("Thank you");
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plate:-40$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 40) {
                    console.log("Thank you");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        } else if (dish == 2) {
            console.log("Chapati");
            console.log("1.Half plate:- 30$ \n 2. Full plate:-60$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plate:-30$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 30) {
                    console.log("Thank you");
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (price == 2) {
                console.log("2.Full plate:-60$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 60) {
                    console.log("Thank you");
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        }
    } else if (time == 2) {
        console.log('1.Rice and curry \n2.Chapati and Sabzi');
        let dise = (input.question("Enter your dise :- "));
        if (dise == 1) {
            console.log("Rice and curry");
            console.log("1.Half plate:- 50$ \n 2. Full plate:-100$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-50$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("Thank you");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra money" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more money" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-100$");
                console.log("2.Full plate:-40$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 100) {
                    console.log("Thank you");
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        } else if (dise == 2) {
            console.log("Chapati and Sabzi");
            console.log("1.Half plate:- 30$ \n2.Full plate:-60$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-30$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 30) {
                    console.log("Thank you");
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-60$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 60) {
                    console.log("Thank you");
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        }
    } else if (time == 3) {
        console.log('1.Dal Makhani \n2.Aloo Gobi');
        let dise = (input.question("Enter your dise :- "));
        if (dise == 1) {
            console.log("Dal Makhani");
            console.log("1.Half plate:- 40$ \n 2. Full plate:-80$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-40$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 40) {
                    console.log("Thank you");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-80$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 80) {
                    console.log("Thank you");
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        } else if (dise == 2) {
            console.log("Aloo Gobi");
            console.log("1.Half plate:- 50$ \n 2.Full plate:-100$");
            let plate = (input.question('Enter your plate:-'));
            if (plate == 1) {
                console.log('1.Half plete:-50$');
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 50) {
                    console.log("Thank you");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            } else if (plate == 2) {
                console.log("2.Full plete:-100$");
                let pay = (input.questionInt("Enter your pay:- "));
                if (pay == 100) {
                    console.log("Thank you");
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra money:-" + extra);
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more money:-" + less);
                    let pay_again = (input.questionInt("Enter your pay_again:-"))
                    if (pay_again == less) {
                        console.log("thank you");
                    } else if (less < pay_again) {
                        console.log("thanks" + extra);
                    } else if (less > pay_again) {
                        let extra = less - pay_again
                        let Return = pay + pay_again;
                        console.log("your order has canceled");
                        console.log("keep your money:-" + Return)
                    }
                }
            }
        }
    }
}
