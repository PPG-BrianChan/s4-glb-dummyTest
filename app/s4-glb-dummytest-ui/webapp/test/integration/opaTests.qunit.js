sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        's4glbdummytestui/test/integration/FirstJourney',
		's4glbdummytestui/test/integration/pages/BooksList',
		's4glbdummytestui/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('s4glbdummytestui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);