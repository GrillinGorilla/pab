
function pab()
{
	$.post("https://449.duckdns.org/api/webhook/-l30o8wixXfLB7uifsM7FOftS", 
		  function(data,status){$.toast({
				text: "PaB 4 Eva!! <3",
				heading: status,
				position: 'top-right',
				bgColor: '#2ecc71',
				textColor: '#fff',
			  });
			$("#changeTheLightsHeader").css('color', '#E83B3B');
		});
}

function randomMessage()
{
	$.post("https://449.duckdns.org/api/webhook/-hQHv4mvo66R1jTWViBxml6LC", 
		  function(data,status){$.toast({
				text: "I wonder what Holly's cats are thinking right now....",
				heading: status,
				position: 'top-right',
				bgColor: '#2ecc71',
				textColor: '#fff',
			  });
			$("#changeTheLightsHeader").css('color', '#BF1212');
		});
}

function randomPattern()
{
	$.post("https://449.duckdns.org/api/webhook/-L1E-tgASTDeOq2N8dkdZ8ToQ", 
		  function(data,status){$.toast({
				text: "Gettin' blinky wit it!",
				heading: status,
				position: 'top-right',
				bgColor: '#2ecc71',
				textColor: '#fff',
			  });
			$("#changeTheLightsHeader").css('color', '#0A959C');
		});
}
