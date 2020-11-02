describe('types', () => {

    describe('declaring variables and stuff', () => {

        it('using let', () => {
            let x = 10;
            x = 30;

            let z = 'Dale';
            z = 'Diane';

            let q: string[];
            q = ['bird', 'plane', 'tacos']

            let y: any = 3;
            y = 3.14;
            y = 'tacos are delicious';
            y = ['dog', 'cat', 'mouse'];

        });

        it('some more details about let', () => {
            int a: number | String; // Union Type

            a = 'pizza';
            a = 42;
        });

        it('a bit about constants', () => {
            // they are names that cannot be reassigned to.  that is it, no more.

            const a = 12; // with a const you must reassign the variable

            // a = 13; // cant do this; we use single equals sign to assign a value, with a const you can only do this when you declare it.

            const luckyNumbers = [7, 9, 20];

            luckyNumbers[1] = 10;
            expect(luckyNumbers).toEqual([7, 10, 20]);
            const show = { title: 'the Manadalorean', network: 'Disney +', yearReleased: 2017 };
            show.yearReleased = 2019;
        });

        it('so what is so wrong with the var keyword anyhow?', () => {

            const age = 21;
            let message: string;
            if (age >= 21) {
                message = 'old enough';
            } else {
                message = 'too young'
            };

            expect(message).toBe('old enough');
        });
    });

    describe('literals', () => {

        describe('number literals', () => {

            it('some samples', () => {

                let sample: number;
                sample = 10;
                sample = 10.5;
                sample = 0xff;
                sample = 0o22; // base 0
                sample = 0b01010; // base 2 - binary
                sample = 18_989_098_928.22;

                sample = parseFloat('555.55');
                expect(sample).toBe(555.55);

            });


        });
    });


});