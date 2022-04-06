valid=true
count=1
while [ $valid ]
do
echo $count
if [ $count -eq 50 ];
then
break
fi
((count++))
done

