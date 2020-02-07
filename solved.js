
        
        var check=false;
		
        for(let num=1;num<10;num++)
        {
		for(let i=2; i <= num/2; i++)
		{
			if(num%i == 0)
			{
				check = true;
				break;
			}
		}
		if(check == 0)
		{
			console.log(num+" is Prime");
		}
		else
		{
			console.log(num+" is not Prime");
        }
    }